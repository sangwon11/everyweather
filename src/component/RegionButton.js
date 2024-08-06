import React from 'react';
import { Button } from 'react-bootstrap';

const RegionButton = ({cities, selectedCity, setCity}) => {
  console.log("cities",cities)
  return (
    <div>
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

export default RegionButton;