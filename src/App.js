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
  const [backgroundImage, setBackgroundImage] = useState('url(https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5fGVufDB8fDB8fHww)')

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

  useEffect(()=>{
    if (weather?.weather[0].main == 'Rain') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Clouds') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Drizzle') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Thunderstorm') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Snow') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Mist') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1603794052293-650dbdeef72c?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'smoke') {
      setBackgroundImage('url(https://images.unsplash.com/photo-1626535683369-0edf8fb3bd58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')
    } else if (weather?.weather[0].main == 'Haze') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'Dust') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'Fog') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'sand') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'Ash') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'squall') {
      setBackgroundImage('url()')
    } else if (weather?.weather[0].main == 'Tonado') {
      setBackgroundImage('url()')
    }
    else {
      setBackgroundImage('url(https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5fGVufDB8fDB8fHww)')
    }
  })

  return (
    <div className='background' style={{backgroundImage}}>

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
