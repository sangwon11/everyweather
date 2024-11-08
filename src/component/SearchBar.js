import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setCity(searchQuery);
  };

  return (
    <div className='search-bar'>
      <button onClick={() => setCity('current')} className='current-btn'>
        <FontAwesomeIcon icon={faGlobe} fontSize={40} />
        </button>
      <input 
        type='text' 
        placeholder='Search(english)' 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
}

export default SearchBar;