import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherBox = ({weather, icon}) => {
    console.log("weather",weather)
  return (
      <div className='weather-box'>
        <div>{icon}</div>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}C / {Math.floor(weather?.main.temp * 1.8 +32)}F </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
  )
}

export default WeatherBox;