import {useState } from 'react';
import '../../App.css';
import Canvas from '../Canvas';
import RandomString from '../RandomString';
import sketch1 from '../sketches/01sketch/sketch';
import sketch3 from '../sketches/03sketch/sketch';

const Index = () => {
    const [sketchId, setSketchId] = useState(1);
  
    const toggleSketch = (): void => {
        setSketchId(sketchId===1? 2: 1);
    }
    
    return (
        <>
        <Canvas sketch={sketchId===1? sketch1: sketch3}/>
        <RandomString onClick={toggleSketch}/>
        </>
    );
};
export default Index;