import React, { useState } from 'react';
import './DropdownButton.css';

const DropdownButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="dropdown-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <button className="main-button">Main Button</button>
      {isHovered && (
        <div className="dropdown">
          <button className="dropdown-button">Sub Button 1</button>
          <button className="dropdown-button">Sub Button 2</button>
          <button className="dropdown-button">Sub Button 3</button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;