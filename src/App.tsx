import React, {useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import RandomString from './components/RandomString';
import AudioPlayer from './components/AudioPlayer';
import sketch1 from './components/sketches/01sketch/sketch';
import sketch2 from './components/sketches/02sketch/sketch';
import sketch3 from './components/sketches/03sketch/sketch';

const App = () => {

  const [sketchId, setSketchId] = useState(1);

  const toggleSketch = (): void => {
      setSketchId(sketchId===1? 2: 1);
  }
  
  return (
    <div className="App">
      <AudioPlayer/>
      <Canvas sketch={sketchId===1? sketch1: sketch3}/>
      <RandomString onClick={toggleSketch}/>
    </div>
  );
}

export default App;
