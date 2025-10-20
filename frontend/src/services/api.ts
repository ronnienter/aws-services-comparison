import axios from 'axios';
import { AWSService, ComparisonResult } from '../types';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const apiService = {
  // Get all services with optional filters
  getServices: async (params?: {
    category?: string;
    free_tier?: boolean;
    search?: string;
  }): Promise<AWSService[]> => {
    const response = await api.get('/services', { params });
    return response.data;
  },

  // Get a specific service by ID
  getService: async (serviceId: string): Promise<AWSService> => {
    const response = await api.get(`/services/${serviceId}`);
    return response.data;
  },

  // Get all categories
  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/categories');
    return response.data;
  },

  // Compare multiple services
  compareServices: async (serviceIds: string[]): Promise<ComparisonResult> => {
    const response = await api.get(`/services/compare/${serviceIds.join(',')}`);
    return response.data;
  },
};