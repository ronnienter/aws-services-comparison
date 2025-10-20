import React from 'react';

interface FilterControlsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (search: string) => void;
  showFreeTierOnly: boolean;
  onFreeTierToggle: (show: boolean) => void;
  selectedServicesCount: number;
  onClearSelection: () => void;
  onCompare: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  showFreeTierOnly,
  onFreeTierToggle,
  selectedServicesCount,
  onClearSelection,
  onCompare,
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-row">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="free-tier-filter">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showFreeTierOnly}
              onChange={(e) => onFreeTierToggle(e.target.checked)}
            />
            Free Tier Only
          </label>
        </div>
      </div>

      {selectedServicesCount > 0 && (
        <div className="comparison-controls">
          <div className="selected-info">
            {selectedServicesCount} service{selectedServicesCount !== 1 ? 's' : ''} selected
          </div>
          <div className="comparison-buttons">
            <button onClick={onClearSelection} className="clear-btn">
              Clear Selection
            </button>
            {selectedServicesCount >= 2 && (
              <button onClick={onCompare} className="compare-btn primary">
                Compare Services
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;