import React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import RandomString from './components/RandomString';
import sketch1 from './components/sketches/01sketch/sketch';

const App = () => {
  
  return (
    <div className="App">
      <p></p>
      <Canvas sketch={sketch1}/>
      <RandomString/>
      
    </div>
  );
}

export default App;
