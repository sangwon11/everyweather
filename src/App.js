import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import Record from './component/Record';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudBolt, faCloudRain, faDroplet, faSmog, faTornado, faVolcano, faWind } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons';


function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('url(https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5fGVufDB8fDB8fHww)');
  const [icon, setIcon] = useState("");
  const [audio, setAudio] = useState("");

  const cities = [
    {
      country: 'KOREA',
      cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Ulsan', 'Gwangju']
    },
    {
      country: 'USA',
      cities: ['Washington', 'New York', 'Los Angeles', 'Chicago', 'Las Vegas']
    },
    {
      country: 'CANADA',
      cities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary']
    },
    {
      country: 'JAPAN',
      cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya']
    },
    {
      country: 'CHINA',
      cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Tianjin', 'Chongqing']
    },
    {
      country: 'RUSSIA',
      cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan']
    },
    {
      country: 'GERMANY',
      cities: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt']
    },
    {
      country: 'AUSTRALIA',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
    }
  ]

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
    try {
      let response = await fetch(url);
      if (!response.ok) {
      throw new Error("city not found");
    }
      let data = await response.json();
      setWeather(data);
    } catch (error) {
      alert('wrong city name.');
    } finally {
      ;
      setLoading(false)
    }
  }

  useEffect(()=>{
    if (city=="") {
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  },[city])


  useEffect(()=>{
    if (weather) {
      const weatherConditions = {
        Rain: { backgroundImage: 'url(https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          icon: faCloudRain, audio: './song/rain.mp3'
        },
        Clouds: { backgroundImage: 'url(https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          icon: faCloud, audio: './song/lazy.mp3'
        },
        Drizzle: { backgroundImage: 'url(https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faDroplet, audio: './song/drizzle.mp3'
        },
        Thunderstorm: { backgroundImage: 'url(https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faCloudBolt, audio: './song/rain.mp3'
        },
        Snow: { backgroundImage: 'url(https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faSnowflake, audio: './song/snow.mp3'
        },
        Mist: { backgroundImage: 'url(https://images.unsplash.com/photo-1603794052293-650dbdeef72c?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faSmog, audio: './song/lazy.mp3'
        },
        Smoke: { backgroundImage: 'url(https://images.unsplash.com/photo-1626535683369-0edf8fb3bd58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          icon: faSmog, audio: './song/rain.mp3'
        },
        Haze: { backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1666211586138-d40960820390?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faSmog, audio: './song/rain.mp3'
        },
        Dust: { backgroundImage: 'url(https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          icon: faSmog, audio: './song/rain.mp3'
        },
        Fog: { backgroundImage: 'url(https://images.unsplash.com/photo-1444837881208-4d46d5c1f127?q=80&w=2845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faSmog, audio: './song/rain.mp3'
        },
        Sand: { backgroundImage: 'url(https://images.unsplash.com/photo-1603731896431-2b3439e9f092?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faSmog, audio: './song/rain.mp3'
        },
        Ash: { backgroundImage: 'url(https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faVolcano, audio: './song/rain.mp3'
        },
        Squall: { backgroundImage: 'url(https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faWind, audio: './song/rain.mp3'
        },
        Tornado: { backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
          icon: faTornado, audio: './song/rain.mp3'
        },
        Clear: { backgroundImage: 'url(https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5fGVufDB8fDB8fHww)', 
          icon: faSun, audio: './song/summer.mp3'
        }
      }
      const condition = weatherConditions[weather.weather[0].main] || weatherConditions.Clear;
      setBackgroundImage(condition.backgroundImage);
      setIcon(<FontAwesomeIcon icon={condition.icon} />);
      setAudio(new Audio(condition.audio));
    }
  }, [weather]);

  useEffect(() => {
    if (audio) {
      audio.play();
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div className='background' style={{backgroundImage}}>

      {loading ? ( 
        <div className='container'>
          <ClipLoader color="#f88c6b" loading={loading} size={150} /> 
        </div>
      ) : (
        <div className='component-area'>
            <WeatherButton cities={cities} setCity={setCity} />
            <WeatherBox weather={weather} icon={icon} setCity={setCity}/>
            <Record audio={audio} />
        </div>)}

    </div>
  );
}

export default App;
