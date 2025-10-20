import React, { useState, useEffect } from 'react';
import { AWSService } from './types';
import { apiService } from './services/api';
import ServiceCard from './components/ServiceCard';
import FilterControls from './components/FilterControls';
import ComparisonView from './components/ComparisonView';
import './App.css';

const App: React.FC = () => {
  const [services, setServices] = useState<AWSService[]>([]);
  const [filteredServices, setFilteredServices] = useState<AWSService[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFreeTierOnly, setShowFreeTierOnly] = useState(false);
  
  // Comparison states
  const [selectedServices, setSelectedServices] = useState<AWSService[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [services, selectedCategory, searchTerm, showFreeTierOnly]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [servicesData, categoriesData] = await Promise.all([
        apiService.getServices(),
        apiService.getCategories()
      ]);
      setServices(servicesData);
      setCategories(categoriesData);
    } catch (err) {
      setError('Failed to load AWS services data. Please make sure the backend server is running.');
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = services;

    if (selectedCategory) {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (showFreeTierOnly) {
      filtered = filtered.filter(service => service.free_tier);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.key_features.some(feature => feature.toLowerCase().includes(searchLower))
      );
    }

    setFilteredServices(filtered);
  };

  const handleToggleServiceSelection = (service: AWSService) => {
    setSelectedServices(prev => {
      const isSelected = prev.find(s => s.id === service.id);
      if (isSelected) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleClearSelection = () => {
    setSelectedServices([]);
  };

  const handleCompare = () => {
    if (selectedServices.length >= 2) {
      setShowComparison(true);
    }
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <h2>Loading AWS Services...</h2>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={loadData} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (showComparison) {
    return (
      <div className="app">
        <ComparisonView 
          services={selectedServices} 
          onClose={handleCloseComparison}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>AWS Services Comparison</h1>
        <p>Compare Amazon Web Services to find the right solution for your needs</p>
      </header>

      <FilterControls
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showFreeTierOnly={showFreeTierOnly}
        onFreeTierToggle={setShowFreeTierOnly}
        selectedServicesCount={selectedServices.length}
        onClearSelection={handleClearSelection}
        onCompare={handleCompare}
      />

      <main className="services-grid">
        {filteredServices.length === 0 ? (
          <div className="no-results">
            <h3>No services found</h3>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          filteredServices.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.some(s => s.id === service.id)}
              onToggleSelect={handleToggleServiceSelection}
            />
          ))
        )}
      </main>

      <footer className="app-footer">
        <p>
          Showing {filteredServices.length} of {services.length} AWS services
          {selectedServices.length > 0 && (
            <span> | {selectedServices.length} selected for comparison</span>
          )}
        </p>
      </footer>
    </div>
  );
};

export default App;