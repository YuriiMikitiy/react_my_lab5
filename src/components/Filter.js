import React from 'react';

export default function Filter({ currentFilter, onFilterChange }){
    return (
        <div className="filter">
          <button
            className={currentFilter === 'all' ? 'active' : ''}
            onClick={() => onFilterChange('all')}
          >
            Всі
          </button>
          <button
            className={currentFilter === 'active' ? 'active' : ''}
            onClick={() => onFilterChange('active')}
          >
            Активні
          </button>
          <button
            className={currentFilter === 'completed' ? 'active' : ''}
            onClick={() => onFilterChange('completed')}
          >
            Виконані
          </button>
        </div>
      );
}