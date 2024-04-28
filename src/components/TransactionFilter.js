// src/components/TransactionFilter.js
import React, { useState } from 'react';

const TransactionFilter = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onFilter(searchTerm);
  };

  return (
    <div className="transaction-filter">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default TransactionFilter;
