import React from 'react';
import SearchBar from './SearchBar';

const WeatherBox = ({weather, icon, setCity}) => {
    console.log("weather",weather)
  return (
      <div className='weather-box'>
        <SearchBar setCity={setCity}/>
        <div className='weather-info'>
          <div>{icon}</div>
          <div>{weather?.name}</div>
          <h2>{weather?.main.temp}C / {Math.floor(weather?.main.temp * 1.8 +32)}F </h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
        <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/19/5e/41/entrance.jpg?w=1000&h=-1&s=1' />
      </div>
  )
}

export default WeatherBox;