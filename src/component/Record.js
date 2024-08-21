import React, { useEffect, useState } from 'react'
import './Record.css';

const Record = ({audio, title, artistName, weather,}) => {
  console.log('audio', weather)
  
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