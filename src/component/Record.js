import { faForwardStep, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import './Record.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Record = ({ audio, title, artistName, city, isPlaying, togglePlayPause, playNextSong }) => {
  return (
    <div className={`record-container ${!city || !isPlaying ? 'paused' : ''}`}>
      <div className='bgm-info'>
        <div className='title'>{title}</div>
        <div>{artistName}</div>
      </div>
      <img src='./img/record.png' alt='record' />
      <div className='controls'>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FontAwesomeIcon width={30} icon={faPause} /> : <FontAwesomeIcon width={30} icon={faPlay} />}
        </button>
        <button onClick={playNextSong}><FontAwesomeIcon icon={faForwardStep} /></button>
      </div>
    </div>
  );
};

export default Record;
