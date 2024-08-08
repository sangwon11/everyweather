import React from 'react';
import SearchBar from './SearchBar';

const WeatherBox = ({weather, icon, setCity}) => {
    console.log("weather",weather)
  return (
      <div className='weather-box'>
        <SearchBar setCity={setCity}/>
        <div>
          <div>{icon}</div>
          <div>{weather?.name}</div>
          <h2>{weather?.main.temp}C / {Math.floor(weather?.main.temp * 1.8 +32)}F </h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
      </div>
  )
}

export default WeatherBox;