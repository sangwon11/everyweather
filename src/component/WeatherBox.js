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
      Toronto: 'https://d1l57x9nwbbkz.cloudfront.net/files/s3fs-public/2024-04/Toronto_downtown_aerial_1.jpg?VersionId=7DuAckWrxLsIjyO9FlNQJBtt3eT2jroT',
      Vancouver: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/26/34/cc/caption.jpg?w=1200&h=1600&s=1',
      Montreal: 'https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2F2023-06%2FQC-Montreal-Skyline_hero.jpg&w=1920&q=75',
      Ottawa: 'https://www.worldatlas.com/r/w1200/upload/c6/c5/e7/shutterstock-621829478.jpg',
      Calgary: 'https://www.lifeincalgary.ca/assets/ImageTextElement/Life-in-Calgary/Lifestyle/WhatIsLifeInCalgary2__ScaleWidthWzEwMDBd.jpg',
      Tokyo: 'https://as2.ftcdn.net/v2/jpg/00/60/68/81/1000_F_60688171_pLSPCUctILyXH16I6bHyjrhHEcuFxQ5d.jpg',
      Osaka: 'https://img.freepik.com/premium-photo/osaka-japan-cityscape_720143-861.jpg',
      Kyoto: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Yokohama: 'https://nuflytours.com/uploads/yokohama_800x400.jpg',
      Nagoya: 'https://media.istockphoto.com/id/469164384/ko/%EC%82%AC%EC%A7%84/%EC%9D%BC%EB%B3%B8-%EB%82%98%EA%B3%A0%EC%95%BC-%EB%8F%84%EC%8B%9C-%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9D%B8.jpg?s=612x612&w=0&k=20&c=FcKlE3J3EKJMEklfB1sBMPTLC0I3Xc62cHs8Kcva5qM=',
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
      Dublin: '/cityImg/dublin.webp',
      Berlin: 'https://hips.hearstapps.com/hmg-prod/images/berlin-skyline-with-fernsehturm-tower-1648214696.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
      Munich: 'https://www.hoganlovells.com/-/media/project/our-locations/offices/munich/hlcom_office-mobile-banner-munich.jpg',
      Hamburg: 'https://images.unsplash.com/photo-1569150216991-aba1feb19ac5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Cologne: 'https://cdn.britannica.com/78/151778-050-1FC733B4/Night-view-Cologne-Germany-Rhine-River.jpg',
      'Frankfurt am Main': 'https://plus.unsplash.com/premium_photo-1719843507763-9dcd405f9619?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Sydney: 'https://www.pelago.co/img/destinations/sydney/hero-image.jpg',
      Melbourne: 'https://businessevents.australia.com/content/dam/digital/be/images/melbourne-vic-1092057.jpg',
      Brisbane: 'https://teq.queensland.com/au/en/industry/what-we-do/stakeholder-engagement/brisbane-region.thumb.800.480.png',
      Perth: 'https://www.dailypop.kr/news/photo/201901/37527_65577_3044.png',
      Adelaide: 'https://a.eu.mktgcdn.com/f/100004519/DUsRwMr1lBHly4jrjOi1HLUsSL6oTYiQkDFEbo51eOI.jpg'

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
          <h2>{Math.floor(weather?.main.temp)}&deg;C / {Math.floor(weather?.main.temp * 1.8 +32)}&deg;F </h2>
          <h3>{weather?.weather[0].description}</h3>
          <h3>강수량:</h3>
          <h3>구름상태:</h3>
          <h3>풍속:</h3>
          <h3>기압:</h3>
          <h3>습도:</h3>
        </div>
        <img className='cityImg' src={img} />
      </div>
      <NewsComponent/>
    </div>
  )
}

export default WeatherBox;