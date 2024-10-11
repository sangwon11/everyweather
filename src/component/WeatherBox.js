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
      Incheon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/%EB%8F%84%EC%8B%9C%EC%9D%98%ED%83%84%EC%83%9D.jpg/500px-%EB%8F%84%EC%8B%9C%EC%9D%98%ED%83%84%EC%83%9D.jpg',
      Daegu: 'https://www.ktsketch.co.kr/news/photo/201907/4254_15444_1925.gif',
      Ulsan: 'https://live.staticflickr.com/5050/5338607075_c7c60a454e_b.jpg',
      Daejeon: 'https://blog.southofseoul.net/wp-content/uploads/2022/08/Daejeon-Places-to-Stay.png',
      Gwangju: 'https://img.12go.com/0/fit/1024/0/ce/1/plain/s3://12go-web-static/static/images/upload-media/5031.jpeg',
      Washington: 'https://www.telegraph.co.uk/content/dam/travel/Spark/brand-usa-2018/washinton-dc-mall.jpg?imwidth=680',
      'New York': 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'Los Angeles': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/556px-Los_Angeles_with_Mount_Baldy.jpg',
      Chicago: 'https://media.istockphoto.com/id/1204331594/de/foto/dramatischer-sonnenuntergang-downtown-chicago.jpg?s=612x612&w=0&k=20&c=hfsEzGuQViJR9TNvCakMfLDb9cj27ZD-HCa0GrWKm3w=',
      'Las Vegas': 'https://tnphotos.s3.ca-central-1.amazonaws.com/uploads/2023/12/iStock-954500850.jpg',
      Toronto: 'https://plus.unsplash.com/premium_photo-1694475481348-7cbe417be129?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Vancouver: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/26/34/cc/caption.jpg?w=1200&h=1600&s=1',
      Montreal: 'https://images.unsplash.com/photo-1559682468-a6a29e7d9517?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Ottawa: 'https://smartcdn.gprod.postmedia.digital/nationalpost/wp-content/uploads/2022/05/Panoramic-view-of-downtown-Ottawa-with-Parliament-Hill-100913_016-Credit-Ottawa-Tourism-scaled.jpg?quality=90&strip=all&w=1128&h=846&type=webp&sig=iyrA92VXWw4hpGZzFu_iCg',
      Calgary: 'https://images.unsplash.com/photo-1526863336296-fac32d550655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Tokyo: 'https://img.freepik.com/free-photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan_335224-148.jpg',
      Osaka: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTued-8DS7sB5isSPPeQOqgvxIxd8-gbXfR49bcVkThh6xwQ0iVbsMsA9BDjcxYLBqzgf-k4hC8pGkBJu8o64FudEwWxpcCDfAlMAo6Vg',
      Kyoto: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Yokohama: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Minato_Mirai_In_Blue.jpg/516px-Minato_Mirai_In_Blue.jpg',
      Nagoya: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagoya_Night_View.jpg/640px-Nagoya_Night_View.jpg',
      Bangkok: 'https://www.travelseewrite.com/wp-content/uploads/2022/09/BANGKOK-riverside-hotels.jpeg',
      'Chiang Mai': 'https://thechiangmai.com/oldtown/wp-content/uploads/2023/02/A-QUICK-HISTORY-OF-CHIANG-MAI2.jpg',
      Pattaya: 'https://thailandawaits.com/wp-content/uploads/2022/12/Pattaya-Guide-City-Sign-1125x695.jpg',
      Phuket: 'https://cdn.britannica.com/90/213590-050-D081F29C/Phuket-Thailand.jpg',
      'Hat Yai': 'https://media.gettyimages.com/id/504195450/photo/cityscape-of-hatyai-city.jpg?s=612x612&w=0&k=20&c=jwbcrdPhNgsa936v8Lx02vhQ2IKLwRdzLKFbWL53x00=',
      Hanoi: 'https://live.staticflickr.com/65535/53089690900_3bdcfece45_c.jpg',
      'Ho Chi Minh City': 'https://live.staticflickr.com/65535/53329298767_3c1a14858b_c.jpg',
      'Turan': 'https://www.telegraph.co.uk/content/dam/travel/Spark/Hayes-and-Jarvis/HayesJarvis-da-nang-night-getty.jpg?imwidth=680',
      Haiphong: 'https://files.customs.gov.vn/CustomsCMS/ckeditor/images/haiphong1%20(1).jpg',
      'Nha Trang': 'https://kampatour.com/pic/blog/c59c5862-7c67-4a55-a9a8-e43e1df85a77.jpg',
      Berlin: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2OTAzMDI1MzA1MDkz/alexanderplatz-berlin-germany.jpg',
      Munich: 'https://plus.unsplash.com/premium_photo-1661963646444-ea17cd77c212?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Hamburg: 'https://images.unsplash.com/photo-1569150216991-aba1feb19ac5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Cologne: 'https://cdn.britannica.com/78/151778-050-1FC733B4/Night-view-Cologne-Germany-Rhine-River.jpg',
      'Frankfurt am Main': 'https://plus.unsplash.com/premium_photo-1719843507763-9dcd405f9619?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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