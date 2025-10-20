import React from 'react';
import { AWSService } from '../types';

interface ComparisonViewProps {
  services: AWSService[];
  onClose: () => void;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ services, onClose }) => {
  if (services.length === 0) return null;

  return (
    <div className="comparison-view">
      <div className="comparison-header">
        <h2>Service Comparison</h2>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      <div className="comparison-table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="comparison-attribute">Attribute</th>
              {services.map(service => (
                <th key={service.id} className="service-column">
                  <div className="service-header">
                    <h3>{service.name}</h3>
                    <span className="category">{service.category}</span>
                    {service.free_tier && <span className="free-tier">FREE TIER</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="attribute-label"><strong>Description</strong></td>
              {services.map(service => (
                <td key={service.id}>{service.description}</td>
              ))}
            </tr>
            
            <tr>
              <td className="attribute-label"><strong>Pricing Model</strong></td>
              {services.map(service => (
                <td key={service.id}>{service.pricing_model}</td>
              ))}
            </tr>

            <tr>
              <td className="attribute-label"><strong>Free Tier Details</strong></td>
              {services.map(service => (
                <td key={service.id} className={service.free_tier ? 'has-free-tier' : 'no-free-tier'}>
                  {service.free_tier ? service.free_tier_details : 'No free tier'}
                </td>
              ))}
            </tr>

            <tr>
              <td className="attribute-label"><strong>Key Features</strong></td>
              {services.map(service => (
                <td key={service.id}>
                  <ul className="feature-list">
                    {service.key_features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            <tr>
              <td className="attribute-label"><strong>Pricing Notes</strong></td>
              {services.map(service => (
                <td key={service.id}>
                  <ul className="pricing-notes-list">
                    {service.pricing_notes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            <tr>
              <td className="attribute-label"><strong>Use Cases</strong></td>
              {services.map(service => (
                <td key={service.id}>
                  <div className="use-cases-grid">
                    {service.use_cases.map((useCase, idx) => (
                      <span key={idx} className="use-case-tag">{useCase}</span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="comparison-summary">
        <h3>Comparison Summary</h3>
        <div className="summary-stats">
          <div className="stat">
            <strong>Services Compared:</strong> {services.length}
          </div>
          <div className="stat">
            <strong>Categories:</strong> {[...new Set(services.map(s => s.category))].join(', ')}
          </div>
          <div className="stat">
            <strong>Free Tier Available:</strong> {services.filter(s => s.free_tier).length} of {services.length}
          </div>
          <div className="stat">
            <strong>Pricing Models:</strong> {[...new Set(services.map(s => s.pricing_model))].join(', ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;