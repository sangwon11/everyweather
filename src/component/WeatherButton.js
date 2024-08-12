import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
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
        <Button onClick={() => setCity('')} className='btn'>
          Current Location
        </Button>

        {cities.map((item, index) => (
          <div 
            key={index}
            className='country-button-container'
            onMouseEnter={() => handleMouseEnter(item.country)}
            onMouseLeave={handleMouseLeave}
          >
            <Button onClick={() => setCity(item.country)} className='btn'>
              {item.country}
            </Button>
            {hoveredCity === item.country && (
              <div className='dropdown'>
                {item.cities.map((city, idx) => (
                  <Button
                    key={idx}
                    onClick={() => setCity(city)}
                    className='btn dropdown-item'
                  >
                    {city}
                  </Button>
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