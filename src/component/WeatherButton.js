import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  console.log("cities",cities)
  return (
    <div className='weather-btn'>
      
      <Button 
        onClick={() => setCity("")}
        className='btn'>
          Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
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