import { AWSService, ComparisonResult } from '../types';
import { mockServices, mockCategories } from '../data/mockData';

// Simulated delay to mimic API calls
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Get all services with optional filters
  getServices: async (params?: {
    category?: string;
    free_tier?: boolean;
    search?: string;
  }): Promise<AWSService[]> => {
    await delay(500); // Simulate network delay
    
    let services = [...mockServices];
    
    // Filter by category
    if (params?.category) {
      services = services.filter(service => service.category === params.category);
    }
    
    // Filter by free tier
    if (params?.free_tier !== undefined) {
      services = services.filter(service => service.free_tier === params.free_tier);
    }
    
    // Search filter
    if (params?.search) {
      const searchLower = params.search.toLowerCase();
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.key_features.some(feature => feature.toLowerCase().includes(searchLower))
      );
    }
    
    return services;
  },

  // Get a specific service by ID
  getService: async (serviceId: string): Promise<AWSService> => {
    await delay(300);
    
    const service = mockServices.find(s => s.id === serviceId);
    if (!service) {
      throw new Error('Service not found');
    }
    return service;
  },

  // Get all categories
  getCategories: async (): Promise<string[]> => {
    await delay(200);
    return mockCategories;
  },

  // Compare multiple services
  compareServices: async (serviceIds: string[]): Promise<ComparisonResult> => {
    await delay(400);
    
    const services = mockServices.filter(service => serviceIds.includes(service.id));
    
    if (services.length === 0) {
      throw new Error('No valid services found');
    }
    
    return {
      services,
      comparison: {
        total_services: services.length,
        categories: Array.from(new Set(services.map(s => s.category))),
        free_tier_available: services.filter(s => s.free_tier).map(s => s.name),
        pricing_models: Array.from(new Set(services.map(s => s.pricing_model)))
      }
    };
  },
};
