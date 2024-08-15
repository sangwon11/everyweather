import React, { useEffect, useState } from 'react'
import './Record.css';

const Record = ({audio, weather}) => {
  console.log('audio', weather)

  const [title, setTitle] = useState('');
  const [artistName, setArtistName] = useState('')
  
  useEffect(() => {
    if (weather?.weather[0].main === 'Clouds') {
      setTitle('WI ING WI ING');
      setArtistName('HYUKOH (혁오)')
    } else if (weather?.weather[0].main === 'Clear') {
      setTitle('몇 번의 여름');
      setArtistName('TOIL, Gist')
    } else if (weather?.weather[0].main === 'Rain') {
      setTitle('Rainy day');
      setArtistName('PATEKO(Feat. ASH ISLAND, Skinny Brown)')
    } else if (weather?.weather[0].main === 'Drizzle') {
      setTitle('신스(SINCE) - 봄비 (feat. Rakon)')
    } else if (weather?.weather[0].main === 'Snow') {
      setTitle('성시경, 박효신, 이석훈, 서인국, VIXX(빅스) - 크리스마스니까')
    } else {
      setTitle('PATEKO (파테코) - Rainy day (Feat. ASH ISLAND, Skinny Brown)');
    }
  }, [weather?.name]);
  

  return (
    <div className='record-container'>
      <div className='bgm-info'>
        <div className='title'>{title}</div>
        <div>{artistName}</div>
        <div></div>
      </div>
      <img src='./img/record.png' />
      <audio src={audio} autoPlay></audio>
    </div>
  )
}

export default Record;