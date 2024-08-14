import React, { useEffect } from 'react'
import './Record.css';

const Record = (audio) => {

  return (
    <div className='record-container'>
          <img src='./img/record.png' />
          <audio autoPlay controls>
              <source src='./song/rain.mp3' type='audio/mpeg'/>
            </audio>
    </div>
  )
}

export default Record;