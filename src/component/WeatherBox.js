import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import './WeatherBox.css';
import NewsComponent from './NewsComponent';

const WeatherBox = ({weather, icon, setCity, city}) => {
  console.log("weather", weather)
  
  const [img, setImg] = useState('https://images.unsplash.com/photo-1540198163009-7afda7da2945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFydGh8ZW58MHx8MHx8fDA%3D');

  useEffect(() => {
    const cityImages = {
      Seoul: 'https://image.utoimage.com/preview/cp932674/2021/12/202112026486_500.jpg',
      Busan: 'https://plus.unsplash.com/premium_photo-1661963130289-aa70dd516940?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Incheon: 'https://images.unsplash.com/photo-1671959670540-d56f2849a375?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlEJUI4JUVDJUIyJTlDfGVufDB8fDB8fHww',
      Daegu: 'https://t4.ftcdn.net/jpg/07/51/51/19/240_F_751511930_eUOrfLW9Cp9krmYw7qCyptBfp3Pm2yRa.jpg',
      Ulsan: 'https://t3.ftcdn.net/jpg/04/55/94/80/240_F_455948000_IkhPyIAP54nszQxiJQAbrol2aJOwibjL.jpg',
      Daejeon: 'https://t3.ftcdn.net/jpg/03/35/97/54/240_F_335975468_IkB0LY9xFATYGl4QJgdtgAzVwiHkbEjk.jpg',
      Gwangju: 'https://png.pngtree.com/thumb_back/fw800/background/20230909/pngtree-aerial-view-of-gwanju-city-pmfmd93714-image_13102034.png',
      Washington: 'https://media.istockphoto.com/id/1289724591/photo/aerial-view-of-the-washington-dc-at-night.jpg?s=612x612&w=0&k=20&c=jDvoxjN597_ysSZ5AvuVtdlFd6Gpqr9_PxdIIYLJdlc=',
      'New York': 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Los Angeles': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/556px-Los_Angeles_with_Mount_Baldy.jpg',
      Chicago: 'https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Las Vegas': 'https://cdn.britannica.com/15/167915-050-F3A8873A/replica-Eiffel-Tower-Paris-Las-Vegas-Hotel.jpg',
      Toronto: 'https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Vancouver: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/26/34/cc/caption.jpg?w=1200&h=1600&s=1',
      Montreal: 'https://images.unsplash.com/photo-1559682468-a6a29e7d9517?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Ottawa: 'https://smartcdn.gprod.postmedia.digital/nationalpost/wp-content/uploads/2022/05/Panoramic-view-of-downtown-Ottawa-with-Parliament-Hill-100913_016-Credit-Ottawa-Tourism-scaled.jpg?quality=90&strip=all&w=1128&h=846&type=webp&sig=iyrA92VXWw4hpGZzFu_iCg',
      Calgary: 'https://images.unsplash.com/photo-1526863336296-fac32d550655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Tokyo: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Osaka: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTued-8DS7sB5isSPPeQOqgvxIxd8-gbXfR49bcVkThh6xwQ0iVbsMsA9BDjcxYLBqzgf-k4hC8pGkBJu8o64FudEwWxpcCDfAlMAo6Vg',
      Kyoto: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Yokohama: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Minato_Mirai_In_Blue.jpg/516px-Minato_Mirai_In_Blue.jpg',
      Nagoya: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagoya_Night_View.jpg/640px-Nagoya_Night_View.jpg',
      Beijing: 'https://www.backpackerboy.com/wp-content/uploads/2023/10/Beijing-Lights.jpg.webp',
      Shanghai: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/556px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg',
      Guangzhou: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Canton_Tower_20220626_%28cropped%29.jpg/556px-Canton_Tower_20220626_%28cropped%29.jpg',
      Tianjin: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tianjin_Eye_and_Tianjin.jpg/536px-Tianjin_Eye_and_Tianjin.jpg',
      Chongqing: 'https://digital.ihg.com/is/image/ihg/intercontinental-chongqing-9152844821-2x1',
      Moscow: 'https://www.russinfo.in/moscow/wp-content/uploads/2020/04/01-6.jpg',
      'Saint Petersburg': 'https://cdnp.flypgs.com/files/Sehirler-long-tail/St_Petersburg/st-petersburg-gezi-rehberi.jpg',
      Novosibirsk: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Novosibirsk_skyline_in_winter.jpg/300px-Novosibirsk_skyline_in_winter.jpg',
      Yekaterinburg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/E-burg_asv2019-05_img46_view_from_VysotSky.jpg/536px-E-burg_asv2019-05_img46_view_from_VysotSky.jpg',
      Kazan: 'https://newlinesmag.com/wp-content/uploads/Kul-Sharif-Mosque.jpg',
      Berlin: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2OTAzMDI1MzA1MDkz/alexanderplatz-berlin-germany.jpg',
      Munich: 'https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Hamburg: 'https://images.unsplash.com/photo-1569150216991-aba1feb19ac5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Cologne: 'https://cdn.britannica.com/78/151778-050-1FC733B4/Night-view-Cologne-Germany-Rhine-River.jpg',
      Frankfurt: 'https://plus.unsplash.com/premium_photo-1719843507763-9dcd405f9619?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Sydney: 'https://i.namu.wiki/i/LE-4kyzbxeeYGE2gc4Fnewr9jhBvkBgQDyeND1gQOPwRKGvXKhzcH_q5g_k_ew_lhg7XGnr9tevydzXEdc1tCw.webp',
      Melbourne: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Brisbane: 'https://plus.unsplash.com/premium_photo-1694475701659-444e11e512d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Perth: 'https://content.r9cdn.net/rimg/dimg/ba/de/deacb4c5-city-11563-17a3ef27550.jpg?width=1366&height=768&xhint=4145&yhint=2485&crop=true',
      Adelaide: 'https://carbonneutralcities.org/wp-content/uploads/2018/04/Adelaide.jpeg'

    }
  
    if (weather?.name && cityImages[weather.name]) {
      setImg(cityImages[weather.name]);
    }
  }, [weather?.name])

  if (!city) {
    return (
      <div className='weather-news'>
      <div className='weather-box'>
        <SearchBar setCity={setCity}/>
      </div>
      </div>
    );
  }

  return (
    <div className='weather-news'>
      <div className='weather-box'>
        <SearchBar setCity={setCity}/>
        <div className='weather-info'>
          <div>{icon}</div>
          <h2>{weather?.name}</h2>
          <h2>{Math.floor(weather?.main.temp)}C / {Math.floor(weather?.main.temp * 1.8 +32)}F </h2>
          <h3>{weather?.weather[0].description}</h3>
        </div>
        <img className='cityImg' src={img} />
      </div>
      <NewsComponent/>
    </div>
  )
}

export default WeatherBox;