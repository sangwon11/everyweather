import React, { useState, useEffect, useRef } from 'react';
import './WeatherButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const WeatherButton = ({ cities, setCity }) => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  const weatherBtnContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const midPoint = window.innerHeight / 2;
      const buttons = weatherBtnContainerRef.current.querySelectorAll('.country-button-container');

      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - midPoint);
        const scale = Math.max(0, 180 - distanceFromCenter / 2);
        button.style.transform = `translateX(${scale}px)`;
      });
    };

    const container = weatherBtnContainerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={weatherBtnContainerRef} className='weather-btn-container'>
      <div className='weather-btn'>
        <button onClick={() => setCity('current')} className='btn'>
        <FontAwesomeIcon icon={faGlobe} />
        </button>

        {cities.map((item, index) => (
          <div 
            key={index}
            className='country-button-container'
            onMouseEnter={() => handleMouseEnter(item.country)}
            onMouseLeave={handleMouseLeave}
          >
            <button onClick={() => setCity(item.country)} className='country-btn btn'>
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