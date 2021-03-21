import React from 'react';
import './App.css';
import P5Wrapper from './components/P5Wrapper'

function App() {

  const randomString: string  = btoa(Math.random().toString(36).slice(-7));

  return (
    <div className="App">
      <P5Wrapper/>
      <p>{randomString}</p>
      <a href="">init</a>
    </div>
  );
}

export default App;
