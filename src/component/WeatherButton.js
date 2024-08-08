import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, setCity}) => {
  console.log("cities",cities)
  return (
    <div className='weather-btn'>
      
      <Button 
        variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
        onClick={() => setCity("")}
        className='btn'>
          Current Location
      </Button>

      {cities.map((item, index) => (
        <Button 
          variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
          key={index}
          onClick={()=>setCity(item)}
          className='btn'
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton;