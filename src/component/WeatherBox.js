import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import './WeatherBox.css';

const WeatherBox = ({weather, icon, setCity}) => {
  console.log("weather", weather)
  
  const [img, setImg] = useState('https://images.unsplash.com/photo-1540198163009-7afda7da2945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFydGh8ZW58MHx8MHx8fDA%3D');

  useEffect(() => {
    if (weather?.name==="Seoul") {
      setImg('https://image.utoimage.com/preview/cp932674/2021/12/202112026486_500.jpg')
    } else if (weather?.name==="Busan") {
      setImg('https://plus.unsplash.com/premium_photo-1661914310117-9875b2229719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzYW58ZW58MHx8MHx8fDA%3D')
    } else if (weather?.name==="Incheon") {
      setImg('https://images.unsplash.com/photo-1671959670540-d56f2849a375?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlEJUI4JUVDJUIyJTlDfGVufDB8fDB8fHww')
    } else if (weather?.name==="Daegu") {
      setImg('https://t4.ftcdn.net/jpg/07/51/51/19/240_F_751511930_eUOrfLW9Cp9krmYw7qCyptBfp3Pm2yRa.jpg')
    } else if (weather?.name==="Ulsan") {
      setImg('https://t3.ftcdn.net/jpg/04/55/94/80/240_F_455948000_IkhPyIAP54nszQxiJQAbrol2aJOwibjL.jpg')
    } else if (weather?.name==="Daejeon") {
      setImg('https://t3.ftcdn.net/jpg/03/35/97/54/240_F_335975468_IkB0LY9xFATYGl4QJgdtgAzVwiHkbEjk.jpg')
    } else if (weather?.name==='Gwangju') {
      setImg('https://t4.ftcdn.net/jpg/04/74/31/63/240_F_474316388_NHooUW76hmOWTqbFekKtNTtyoHrysWzP.jpg')
    }
  }, [weather?.name])

  return (
      <div className='weather-box'>
        <SearchBar setCity={setCity}/>
        <div className='weather-info'>
          <div>{icon}</div>
          <h2>{weather?.name}</h2>
          <h2>{weather?.main.temp}C / {Math.floor(weather?.main.temp * 1.8 +32)}F </h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
        <img src={img} />
      </div>
  )
}

export default WeatherBox;