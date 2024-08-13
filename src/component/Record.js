import React from 'react'
import './Record.css';

const Record = () => {
  return (
    <div className='record-container'>
          <img src='./img/record.png' />
          <audio autoPlay controls>
              <source src='./song/Wheels - Audionautix.mp3' type='audio/mpeg'/>
            </audio>
    </div>
  )
}

export default Record;