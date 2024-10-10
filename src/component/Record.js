import './Record.css';

const Record = ({ audio, title, artistName, city, isPlaying, togglePlayPause, playNextSong }) => {
  return (
    <div className={`record-container ${!city ? 'paused' : ''}`}>
      <div className='bgm-info'>
        <div className='title'>{title}</div>
        <div>{artistName}</div>
      </div>
      <img src='./img/record.png' alt='record' />
      <div className='controls'>
        <button onClick={togglePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={playNextSong}>Next</button>
      </div>
    </div>
  );
};

export default Record;
