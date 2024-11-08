import React, { useState, useLayoutEffect, useRef } from 'react';
import './WeatherButton.css';


const WeatherButton = ({ cities, setCity }) => {
  const weatherBtnContainerRef = useRef(null);
  const [activeCountry, setActiveCountry] = useState(null);

  const toggleDropdown = (country) => {
    setActiveCountry(activeCountry === country ? null : country); // 토글
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      const midPoint = window.innerHeight / 2;
      const buttons = weatherBtnContainerRef.current.querySelectorAll('.country-button-container');

      buttons.forEach(button => {
        const rect = button.getBoundingClientRect();
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - midPoint);
        const scale = Math.max(0, 150 - distanceFromCenter / 2);
        const isVeryCenter = distanceFromCenter < 40; // 매우 중앙에 위치한 경우
        const extraTranslateX = isVeryCenter ? 40 : 0; // 중앙에 있을 때 추가로 30px 오른쪽으로 이동
        const scaleTransform = isVeryCenter ? ' scale(1.5)' : (distanceFromCenter < 25 ? ' scale(1.5)' : ' scale(1.0)');
        const opacity = 1 - (distanceFromCenter / (window.innerHeight / 2));

        button.style.transform = `translateX(${scale + extraTranslateX}px)${scaleTransform}`;
        button.style.opacity = opacity.toFixed(2);
      });
    };

    const container = weatherBtnContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={weatherBtnContainerRef} className='weather-btn-container'>
      <div className='weather-btn'>
        {cities.map((item, index) => (
          <div 
            key={index}
            className={`country-button-container ${activeCountry === item.country ? 'active' : ''}`}
            onClick={() => toggleDropdown(item.country)}
          >
            <div className='country-btn btn'>
              {item.country}
            </div>
            {activeCountry === item.country && (
              <div className='dropdown'>
                {item.cities.map((city, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation(); // 클릭 이벤트 버블링 방지
                      setCity(city);
                    }}
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