import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Playback prevented by browser. User interaction required.", error);
      });
    }
  };

  return (
    <>
      <center><h2>Eda mone happy alle ??</h2></center>
      <br />
      <div className="wrapper">
        <img 
          src="/images/pedro.png" 
          alt="Pedro" 
          className="pedro" 
          onClick={handleClick} 
          style={{ cursor: 'pointer' }}
        />
      </div>
      <audio ref={audioRef} loop>
        <source src="/images/pedro_song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <br></br>
      <center><h3>Tap pedro !!</h3></center>
    </>
  );
}

export default App;
