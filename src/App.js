import './App.css';
import { useEffect } from 'react';
import WeatherBox from './component/WeatherBox';

// 1. 홈 화면에 현재위치 날씨
// 2. 날씨정보가 뜨는 컴포넌트
// 3. 전국지역 버튼을 생성, 누르면 해당 지역 날씨가 나옴
// 4. 나머지는 css ui,반응형 기능
// 5. 배포

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=74a971a9bfd6d01630ffc4aa5616f71d`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data",data);
  }

  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
    <div>
      <WeatherBox />
    </div>
  );
}

export default App;
