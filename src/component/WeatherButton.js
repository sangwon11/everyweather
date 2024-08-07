import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, setCity}) => {
  console.log("cities",cities)
  return (
    <div>
      
      <Button 
        variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
        onClick={() => setCity("")}>
          Current Location
      </Button>

      {cities.map((item, index) => (
        <Button 
          variant={`${selectedCity == null ? "outline-warning" : "warning"}`}
          key={index}
          onClick={()=>setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  )
}

export default WeatherButton;