import React, { useState } from 'react';

const SearchBar = ({ setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setCity(searchQuery);
  };

  return (
    <div className='search-bar'>
      <input 
        type='text' 
        placeholder='도시 입력(영어로)' 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;