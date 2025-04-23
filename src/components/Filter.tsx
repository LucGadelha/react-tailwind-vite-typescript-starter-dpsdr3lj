import React, { useState, Dispatch, SetStateAction } from 'react';

export type FilterType = 'all' | 'pending' | 'completed';

// Define the props for the Filter component
interface FilterProps {
  // The current filter value
  filter: FilterType;
  // Callback function to update the filter in the parent component
  onFilterChange: Dispatch<SetStateAction<FilterType>>;
}

// Filter component
const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  // State to manage the currently active filter
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleClick = (filter: FilterType) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex items-center justify-center mb-8 mt-8 gap-12">
      <button
        className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${
          activeFilter === 'all'
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button
        className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${
          activeFilter === 'pending'
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleClick('pending')}
      >
        Pending
      </button>
      <button
        className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${
          activeFilter === 'completed'
            ? 'bg-blue-700 text-white'
            : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
