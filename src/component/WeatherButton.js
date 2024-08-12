import React, { useState } from 'react';
import './WeatherButton.css';

const WeatherButton = ({ cities, setCity }) => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div className='weather-btn-container'>
      <div className='weather-btn'>
        <button onClick={() => setCity('')} className='btn'>
          Current Location
        </button>

        {cities.map((item, index) => (
          <div 
            key={index}
            className='country-button-container'
            onMouseEnter={() => handleMouseEnter(item.country)}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => setCity(item.country)} className='btn'>
              {item.country}
            </button>
            {hoveredCity === item.country && (
              <div className='dropdown'>
                {item.cities.map((city, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCity(city)}
                    className='btn dropdown-item'
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;