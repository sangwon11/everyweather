import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 홈 화면에 현재위치 날씨
// 2. 날씨정보가 뜨는 컴포넌트
// 3. 전국지역 버튼을 생성, 누르면 해당 지역 날씨가 나옴
// 4. 나머지는 css ui,반응형 기능
// 5. 배포


function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const cities = ["seoul", "incheon", "busan", "daegu", "daejeon", "ulsan", "gwangju",
    "andong", "suwon", "changwon", "jeonju", "gyeongju", "cheongju", "gangneung",
    "sangju", "yeosu", "gumi"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=74a971a9bfd6d01630ffc4aa5616f71d&units=metric`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  }

  const getWeatherByCity = async() => {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74a971a9bfd6d01630ffc4aa5616f71d&units=metric`
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  }

  useEffect(()=>{
    if (city=="") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  },[city])

  return (
    <div>

      {loading ? ( 
        <div className='container'>
          <ClipLoader color="#f88c6b" loading={loading} size={150} /> 
        </div>
      ) : (
        <div className='container'>
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} setCity={setCity} />
        </div>)}
      
    </div>
  );
}

export default App;
