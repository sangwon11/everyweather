import './App.css';
import { useEffect, useState, useRef } from 'react';
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
  const [audio, setAudio] = useState(null);
  const [title, setTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const cities = [
    {
      country: 'KOREA',
      cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Ulsan', 'Gwangju']
    },
    {
      country: 'JAPAN',
      cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya']
    },
    {
      country: 'CANADA',
      cities: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa', 'Calgary']
    },
    {
      country: 'USA',
      cities: ['Washington', 'New York', 'Los Angeles', 'Chicago', 'Las Vegas']
    },
    { 
      country: 'THAILAND', 
      cities: ['Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket', 'Hat Yai']
    },
    { 
      country: 'VIETNAM', 
      cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Haiphong', 'Nha Trang']
    },
    {
      "country": "UNITED KINGDOM",
      "cities": ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool"]
    },
    {
      "country": "IRELAND",
      "cities": ["Dublin", "Cork", "Limerick", "Galway", "Waterford"]
    },
    {
      country: 'GERMANY',
      cities: ['Berlin', 'Munich', 'Hamburg', 'Cologne', 'Frankfurt']
    },
    {
      "country": "CZECH",
      "cities": ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec"]
    },
    {
      "country": "AUSTRIA",
      "cities": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck"]
    },
    {
      "country": "SWITZERLAND",
      "cities": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern"]
    },
    {
      "country": "FRANCE",
      "cities": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"]
    },
    {
      "country": "NETHERLANDS",
      "cities": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven"]
    },
    {
      "country": "BELGIUM",
      "cities": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège"]
    },    
    {
      "country": "ITALY",
      "cities": ["Rome", "Milan", "Naples", "Turin", "Palermo"]
    },
    {
      "country": "GREECE",
      "cities": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa"]
    },
    {
      "country": "SPAIN",
      "cities": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"]
    },
    {
      "country": "PORTUGAL",
      "cities": ["Lisbon", "Porto", "Braga", "Coimbra", "Funchal"]
    },
    {
      country: 'AUSTRALIA',
      cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide']
    }
  ]
  

  const weatherConditions = {
    Rain: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      icon: faCloudRain, 
      song: [{ audio: '/song/rain.mp3', title: 'Rainy day', artistName: 'PATEKO(Feat. ASH ISLAND, Skinny Brown)' },
        { audio: './song/drizzle.mp3', title: '봄비', artistName: '신스(feat. Rakon)' },
        { audio: '/song/rain2.mp3', title: 'Medley', artistName: 'C JAMM (씨잼)' },
        { audio: '/song/rain3.mp3', title: '우리의 밤을 외워요', artistName: 'Car, the garden' },
        { audio: '/song/rain4.mp3', title: 'For U', artistName: 'Gist(feat. Loco, Coogie)' },
        { audio: '/song/rain5.mp3', title: '비행', artistName: 'E SENS' },
      ]
    },
    Clouds: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      icon: faCloud, 
      song: [{ audio: '/song/clouds1.mp3', title: 'WI ING WI ING', artistName: 'HYUKOH (혁오)' },
        { audio: '/song/clouds2.mp3', title: '어떻게 지내', artistName: 'OVAN (오반)' },
        { audio: '/song/clouds3.mp3', title: 'PEOPLE', artistName: 'CODE KUNST(Feat. Paloalto, The Quiett)' },
        { audio: '/song/clouds4.mp3', title: '북향', artistName: 'Dynamicduo, (Feat. 오혁)' },
        { audio: '/song/clouds5.mp3', title: '숨', artistName: '박효신' },
        { audio: '/song/clouds6.mp3', title: '한숨', artistName: 'Lee HI (이하이)' },
        { audio: '/song/clouds7.mp3', title: '40', artistName: 'Vasco(Feat. 40)' },
        { audio: '/song/clouds8.mp3', title: 'City', artistName: 'Owen (오왼)' },
        { audio: '/song/clouds9.mp3', title: '너나잘하셔', artistName: 'Gist (feat. meenoi)' },
      ]
    },
    Drizzle: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faDroplet, audio: './song/drizzle.mp3', title: '봄비', artistName: '신스(feat. Rakon)'
    },
    Thunderstorm: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faCloudBolt, audio: './song/rain.mp3', title: 'Rainy day', artistName: 'PATEKO(Feat. ASH ISLAND, Skinny Brown)'
    },
    Snow: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faSnowflake, audio: './song/snow.mp3', title: '크리스마스니까', artistName: '성시경, 박효신, 이석훈, 서인국, VIXX'
    },
    Mist: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1603794052293-650dbdeef72c?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faSmog, audio: './song/mist.mp3', title: 'Jasmine', artistName: 'DPR live'
    },
    Smoke: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1626535683369-0edf8fb3bd58?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      icon: faSmog, audio: './song/smoke.mp3', title: 'Smoke', artistName: 'Dynamicduo, 이영지'
    },
    Haze: {
      backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1666211586138-d40960820390?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faSmog, audio: './song/haze.mp3', title: 'And July', artistName: '헤이즈(Feat. Dean, DJ Friz'
    },
    Dust: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      icon: faSmog, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Fog: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1444837881208-4d46d5c1f127?q=80&w=2845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faSmog, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Sand: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1603731896431-2b3439e9f092?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faSmog, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Ash: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faVolcano, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Squall: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faWind, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Tornado: {
      backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', 
      icon: faTornado, audio: './song/rain.mp3', title: '', artistName: ''
    },
    Clear: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5fGVufDB8fDB8fHww)', 
      icon: faSun, 
      song: [{ audio: './song/clear1.mp3', title: '몇 번의 여름', artistName: 'TOIL, Gist' },
        { audio: './song/clear2.mp3', title: '우연히 봄', artistName: '로꼬, 유주' },
        { audio: './song/clear3.mp3', title: '나만, 봄', artistName: '볼빨간사춘기' },
        { audio: './song/clear4.mp3', title: '봄눈', artistName: '10CM' },
        { audio: './song/clear5.mp3', title: '봄을 노래하다', artistName: '40' },
        { audio: './song/clear6.mp3', title: '끝말잇기', artistName: 'TOIL, Gist (feat. Skinny Brown)' },
        { audio: './song/clear7.mp3', title: 'All I Wanna Do', artistName: 'Jay Park' },
        { audio: './song/clear8.mp3', title: 'I', artistName: '태연 (feat. 버벌진트)' },
      ]
    }
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=74a971a9bfd6d01630ffc4aa5616f71d&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74a971a9bfd6d01630ffc4aa5616f71d&units=metric`;
    setLoading(true);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city === "") {
      return;
    } else if (city === "current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  useEffect(() => {
    if (weather) {
      const condition = weatherConditions[weather.weather[0].main] || weatherConditions.Clear;

      setBackgroundImage(condition.backgroundImage);
      setIcon(<FontAwesomeIcon icon={condition.icon} />);

      if (condition.song) {
        const randomSong = condition.song[Math.floor(Math.random() * condition.song.length)];
        setAudio(new Audio(randomSong.audio));
        setTitle(randomSong.title);
        setArtistName(randomSong.artistName);
      } else {
        setAudio(new Audio(condition.audio));
        setTitle(condition.title);
        setArtistName(condition.artistName);
      }
    }
  }, [weather]);

  useEffect(() => {
    if (audio) {
      audioRef.current = audio;
      audioRef.current.play();
      setIsPlaying(true);

      audioRef.current.addEventListener('ended', handleSongEnd);

      return () => {
        audioRef.current.removeEventListener('ended', handleSongEnd);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      };
    }
  }, [audio]);

  const handleSongEnd = () => {
    if (weather) {
      const condition = weatherConditions[weather.weather[0].main] || weatherConditions.Clear;
      const randomSong = condition.song[Math.floor(Math.random() * condition.song.length)];
      setAudio(new Audio(randomSong.audio));
      setTitle(randomSong.title);
      setArtistName(randomSong.artistName);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    handleSongEnd(); // 다음 곡으로 랜덤하게 넘어갑니다.
  };

  return (
    <div className='background' style={{ backgroundImage }}>
      {loading ? (
        <div className='component-area'>
          <WeatherButton cities={cities} setCity={setCity} />
          <div className='loading-case'>
            <ClipLoader color="#f88c6b" loading={loading} size={500} />
          </div>
          <Record
            audio={audio}
            weather={weather}
            title={title}
            artistName={artistName}
            city={city}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            playNextSong={playNextSong}
          />
        </div>
      ) : (
        <div className='component-area'>
          <WeatherButton cities={cities} setCity={setCity} />
          <WeatherBox weather={weather} icon={icon} city={city} setCity={setCity} />
          <Record
            audio={audio}
            weather={weather}
            title={title}
            artistName={artistName}
            city={city}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
            playNextSong={playNextSong}
          />
        </div>
      )}
    </div>
  );
}

export default App;
