import React, { useEffect } from 'react'
import './Record.css';

const Record = (audio) => {

  return (
    <div className='record-container'>
          <img src='./img/record.png' />
          <audio src={audio} autoPlay></audio>
    </div>
  )
}

export default Record;