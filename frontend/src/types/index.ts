export interface AWSService {
  id: string;
  name: string;
  category: string;
  description: string;
  key_features: string[];
  pricing_model: string;
  pricing_notes: string[];
  use_cases: string[];
  free_tier: boolean;
  free_tier_details: string;
}

export interface ComparisonResult {
  services: AWSService[];
  comparison: {
    total_services: number;
    categories: string[];
    free_tier_available: string[];
    pricing_models: string[];
  };
}