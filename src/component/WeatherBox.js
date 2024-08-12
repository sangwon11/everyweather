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
        <img src='https://image.utoimage.com/preview/cp932674/2021/12/202112026486_500.jpg' />
      </div>
  )
}

export default WeatherBox;