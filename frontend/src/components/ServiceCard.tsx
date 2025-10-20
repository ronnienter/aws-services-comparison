import React from 'react';
import { AWSService } from '../types';

interface ServiceCardProps {
  service: AWSService;
  isSelected?: boolean;
  onToggleSelect?: (service: AWSService) => void;
  showCompareButton?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isSelected = false,
  onToggleSelect,
  showCompareButton = true,
}) => {
  return (
    <div className={`service-card ${isSelected ? 'selected' : ''}`}>
      <div className="service-header">
        <h3>{service.name}</h3>
        <span className="category-badge">{service.category}</span>
        {service.free_tier && <span className="free-tier-badge">Free Tier</span>}
      </div>
      
      <p className="description">{service.description}</p>
      
      <div className="pricing">
        <strong>Pricing Model:</strong> {service.pricing_model}
      </div>

      <div className="features">
        <strong>Key Features:</strong>
        <ul>
          {service.key_features.slice(0, 3).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {service.key_features.length > 3 && (
            <li>...and {service.key_features.length - 3} more</li>
          )}
        </ul>
      </div>

      <div className="use-cases">
        <strong>Use Cases:</strong>
        <div className="use-case-tags">
          {service.use_cases.slice(0, 2).map((useCase, index) => (
            <span key={index} className="use-case-tag">{useCase}</span>
          ))}
          {service.use_cases.length > 2 && (
            <span className="use-case-tag">+{service.use_cases.length - 2} more</span>
          )}
        </div>
      </div>

      {showCompareButton && onToggleSelect && (
        <div className="card-actions">
          <button
            onClick={() => onToggleSelect(service)}
            className={`compare-btn ${isSelected ? 'selected' : ''}`}
          >
            {isSelected ? 'Remove from Compare' : 'Add to Compare'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;