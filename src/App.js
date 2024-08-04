import React from 'react';
import './App.css';

function App() {
  return (
    <>
    {/* <center><h2>This is a Homie Check Point !!</h2></center> */}
    <center><h2>Eda mone happy alle ??</h2></center>
    <br></br>
    <div className="wrapper">
      <img src="/images/pedro.png" alt="Pedro" className="pedro" />
      <audio autoPlay loop>
        <source src="/images/pedro_song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
    
    </>
  );
}

export default App;
