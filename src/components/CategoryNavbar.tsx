import React from 'react';

interface CategoryNavbarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  showFilterDropdown: boolean;
  onToggleFilterDropdown: () => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onOpenFilterModal?: () => void;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  showFilterDropdown,
  onToggleFilterDropdown,
  sortBy,
  onSortChange,
  onOpenFilterModal
}) => {
  return (
    <div className="bg-[#316763] sticky top-[80px] sm:top-[88px] lg:top-[96px] z-40 shadow-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Left Side - Product Count */}
          <div className="flex items-center min-w-max">
            {/* <span className="text-karla font-medium text-[13px] text-white uppercase tracking-wide">
              16 PRODUCTS
            </span> */}
          </div>
          
          {/* Center - Category Filters */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 overflow-x-auto hide-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`text-karla font-medium text-[13px] sm:text-[14px] px-3 py-1.5 transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? 'text-white border-b-2 border-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          
          {/* Right Side - View Toggle & Filter Button */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-max">
            {/* Grid/List View Toggle */}
            <div className="flex items-center gap-1 bg-white/10 rounded p-1">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-[#316763]' : 'text-white hover:bg-white/20'
                }`}
                aria-label="Grid view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                </svg>
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-white text-[#316763]' : 'text-white hover:bg-white/20'
                }`}
                aria-label="List view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-white/30 hidden sm:block"></div>

            {/* Filter & Sort Button */}
            <button
              onClick={onOpenFilterModal}
              className="flex items-center gap-2 text-white hover:bg-white/10 px-3 py-1.5 rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-karla font-medium text-[13px] sm:text-[14px] hidden sm:inline">
                FILTER & SORT
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
