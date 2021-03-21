import React from 'react';
import './App.css';
import Canvas from './components/Canvas'
import DisplayDate from './components/DisplayDate';
import RandomString from './components/RandomString';
import sketch1 from './components/sketches/01sketch/sketch';

const App = () => {

  const randomString: string  = btoa(Math.random().toString(36).slice(-7));

  return (
    <div className="App">
      <p></p>
      <Canvas sketch={sketch1}/>
      <RandomString/>
      
    </div>
  );
}

export default App;
