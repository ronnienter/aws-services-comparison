from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from aws_data import AWSService, get_services_by_category, get_service_by_id, get_categories

app = FastAPI(
    title="AWS Services Comparison API",
    description="API for comparing AWS services with detailed information about features, pricing, and use cases",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "AWS Services Comparison API",
        "version": "1.0.0",
        "endpoints": [
            "/services - Get all services or filter by category",
            "/services/{service_id} - Get specific service details",
            "/categories - Get all service categories"
        ]
    }

@app.get("/services", response_model=List[AWSService])
async def get_services(
    category: Optional[str] = Query(None, description="Filter by category"),
    free_tier: Optional[bool] = Query(None, description="Filter by free tier availability"),
    search: Optional[str] = Query(None, description="Search in service names and descriptions")
):
    """Get AWS services with optional filtering"""
    services = get_services_by_category(category)
    
    # Filter by free tier if specified
    if free_tier is not None:
        services = [service for service in services if service.free_tier == free_tier]
    
    # Search filter
    if search:
        search_lower = search.lower()
        services = [
            service for service in services 
            if (search_lower in service.name.lower() or 
                search_lower in service.description.lower() or
                any(search_lower in feature.lower() for feature in service.key_features))
        ]
    
    return services

@app.get("/services/{service_id}", response_model=AWSService)
async def get_service(service_id: str):
    """Get detailed information about a specific AWS service"""
    service = get_service_by_id(service_id)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

@app.get("/categories", response_model=List[str])
async def get_service_categories():
    """Get all available service categories"""
    return get_categories()

@app.get("/services/compare/{service_ids}")
async def compare_services(service_ids: str):
    """Compare multiple AWS services"""
    ids = service_ids.split(",")
    services = []
    
    for service_id in ids:
        service = get_service_by_id(service_id.strip())
        if service:
            services.append(service)
    
    if not services:
        raise HTTPException(status_code=404, detail="No valid services found")
    
    return {
        "services": services,
        "comparison": {
            "total_services": len(services),
            "categories": list(set([service.category for service in services])),
            "free_tier_available": [service.name for service in services if service.free_tier],
            "pricing_models": list(set([service.pricing_model for service in services]))
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)