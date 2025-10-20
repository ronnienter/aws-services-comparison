from typing import List, Dict, Any
from pydantic import BaseModel

class AWSService(BaseModel):
    id: str
    name: str
    category: str
    description: str
    key_features: List[str]
    pricing_model: str
    pricing_notes: List[str]
    use_cases: List[str]
    free_tier: bool
    free_tier_details: str

# AWS Services Data
aws_services_data: List[AWSService] = [
    AWSService(
        id="ec2",
        name="Amazon EC2",
        category="Compute",
        description="Virtual servers in the cloud",
        key_features=[
            "Resizable compute capacity",
            "Multiple instance types",
            "Auto Scaling",
            "Load balancing",
            "Security groups"
        ],
        pricing_model="Pay-as-you-go",
        pricing_notes=[
            "Charged per hour/second of usage",
            "Different pricing for different instance types",
            "Reserved instances offer discounts",
            "Spot instances for flexible workloads"
        ],
        use_cases=[
            "Web applications",
            "Development environments",
            "Big data processing",
            "Machine learning"
        ],
        free_tier=True,
        free_tier_details="750 hours per month of t2.micro instances for 12 months"
    ),
    AWSService(
        id="s3",
        name="Amazon S3",
        category="Storage",
        description="Object storage service",
        key_features=[
            "99.999999999% durability",
            "Unlimited storage",
            "Multiple storage classes",
            "Versioning",
            "Access control"
        ],
        pricing_model="Pay-as-you-store",
        pricing_notes=[
            "Charged for storage used",
            "Request and data transfer fees",
            "Different pricing for storage classes",
            "Lifecycle policies reduce costs"
        ],
        use_cases=[
            "Website hosting",
            "Data backup",
            "Content distribution",
            "Data archiving"
        ],
        free_tier=True,
        free_tier_details="5 GB of standard storage for 12 months"
    ),
    AWSService(
        id="rds",
        name="Amazon RDS",
        category="Database",
        description="Managed relational database service",
        key_features=[
            "Multiple database engines",
            "Automated backups",
            "Multi-AZ deployments",
            "Read replicas",
            "Monitoring and metrics"
        ],
        pricing_model="Pay-as-you-go",
        pricing_notes=[
            "Charged for instance hours",
            "Storage and backup costs",
            "Data transfer fees",
            "Reserved instances available"
        ],
        use_cases=[
            "Web applications",
            "E-commerce platforms",
            "Analytics workloads",
            "Enterprise applications"
        ],
        free_tier=True,
        free_tier_details="750 hours of db.t2.micro instances for 12 months"
    ),
    AWSService(
        id="lambda",
        name="AWS Lambda",
        category="Compute",
        description="Serverless compute service",
        key_features=[
            "No server management",
            "Automatic scaling",
            "Multiple runtime support",
            "Event-driven execution",
            "Built-in monitoring"
        ],
        pricing_model="Pay-per-request",
        pricing_notes=[
            "Charged per request and duration",
            "Free tier includes 1M requests",
            "Memory allocation affects pricing",
            "No charges when code isn't running"
        ],
        use_cases=[
            "API backends",
            "Data processing",
            "File processing",
            "IoT backends"
        ],
        free_tier=True,
        free_tier_details="1M free requests and 400K GB-seconds per month"
    ),
    AWSService(
        id="dynamodb",
        name="Amazon DynamoDB",
        category="Database",
        description="NoSQL database service",
        key_features=[
            "Single-digit millisecond latency",
            "Automatic scaling",
            "Built-in security",
            "Global tables",
            "Backup and restore"
        ],
        pricing_model="Pay-per-request or Provisioned",
        pricing_notes=[
            "On-demand or provisioned capacity",
            "Charged for read/write requests",
            "Storage costs per GB",
            "Global tables incur additional costs"
        ],
        use_cases=[
            "Mobile applications",
            "Web applications",
            "Gaming applications",
            "IoT applications"
        ],
        free_tier=True,
        free_tier_details="25 GB storage and 25 read/write capacity units"
    ),
    AWSService(
        id="cloudfront",
        name="Amazon CloudFront",
        category="Content Delivery",
        description="Content delivery network (CDN)",
        key_features=[
            "Global edge locations",
            "Low latency content delivery",
            "DDoS protection",
            "SSL/TLS encryption",
            "Origin failover"
        ],
        pricing_model="Pay-as-you-go",
        pricing_notes=[
            "Charged for data transfer out",
            "Request fees",
            "Regional pricing variations",
            "Price classes for cost optimization"
        ],
        use_cases=[
            "Website acceleration",
            "Video streaming",
            "API acceleration",
            "Software distribution"
        ],
        free_tier=True,
        free_tier_details="1 TB data transfer out and 10M requests for 12 months"
    ),
    AWSService(
        id="apigateway",
        name="Amazon API Gateway",
        category="Application Services",
        description="Managed API service",
        key_features=[
            "RESTful and WebSocket APIs",
            "Built-in caching",
            "Request/response transformation",
            "Authentication and authorization",
            "Throttling and rate limiting"
        ],
        pricing_model="Pay-per-request",
        pricing_notes=[
            "Charged per API request",
            "Data transfer costs",
            "Caching incurs additional fees",
            "Different pricing for REST vs WebSocket"
        ],
        use_cases=[
            "Microservices architectures",
            "Mobile backends",
            "Web application APIs",
            "Serverless applications"
        ],
        free_tier=True,
        free_tier_details="1M API calls per month for 12 months"
    ),
    AWSService(
        id="sns",
        name="Amazon SNS",
        category="Application Services",
        description="Managed notification service",
        key_features=[
            "Multiple protocols (SMS, email, HTTP)",
            "Topic-based messaging",
            "Mobile push notifications",
            "Message filtering",
            "Dead letter queues"
        ],
        pricing_model="Pay-per-message",
        pricing_notes=[
            "Charged per published message",
            "Different costs for different protocols",
            "SMS pricing varies by destination",
            "Email notifications are free"
        ],
        use_cases=[
            "Application notifications",
            "System alerts",
            "Mobile app notifications",
            "Email campaigns"
        ],
        free_tier=True,
        free_tier_details="1M publishes, 100K HTTP deliveries, 1K email deliveries"
    ),
    AWSService(
        id="sqs",
        name="Amazon SQS",
        category="Application Services",
        description="Message queuing service",
        key_features=[
            "Standard and FIFO queues",
            "Unlimited throughput",
            "At-least-once delivery",
            "Message encryption",
            "Dead letter queues"
        ],
        pricing_model="Pay-per-request",
        pricing_notes=[
            "Charged per request",
            "FIFO queues cost more",
            "Free tier includes 1M requests",
            "Data transfer charges may apply"
        ],
        use_cases=[
            "Decoupling applications",
            "Batch job processing",
            "Microservices communication",
            "Load leveling"
        ],
        free_tier=True,
        free_tier_details="1M requests per month"
    ),
    AWSService(
        id="iam",
        name="AWS Identity and Access Management",
        category="Security",
        description="Identity and access management service",
        key_features=[
            "User and group management",
            "Role-based access control",
            "Multi-factor authentication",
            "Identity federation",
            "Fine-grained permissions"
        ],
        pricing_model="Free",
        pricing_notes=[
            "No charge for IAM users, groups, roles",
            "Additional charges for some features",
            "STS API calls may incur costs"
        ],
        use_cases=[
            "User access control",
            "Service-to-service authentication",
            "Temporary access tokens",
            "Cross-account access"
        ],
        free_tier=True,
        free_tier_details="Core IAM functionality is always free"
    )
]

def get_services_by_category(category: str = None) -> List[AWSService]:
    """Get services filtered by category"""
    if category:
        return [service for service in aws_services_data if service.category.lower() == category.lower()]
    return aws_services_data

def get_service_by_id(service_id: str) -> AWSService:
    """Get a specific service by ID"""
    for service in aws_services_data:
        if service.id == service_id:
            return service
    return None

def get_categories() -> List[str]:
    """Get all unique categories"""
    categories = set()
    for service in aws_services_data:
        categories.add(service.category)
    return sorted(list(categories))