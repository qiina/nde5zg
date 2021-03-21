import React, { useEffect } from 'react';
import p5 from 'p5';
import sk from './sketches/01sketch/sketch'

const DrawSketch: React.FC = () => {

    useEffect(() => {
        new p5(sk)
    },[]);

    return (
        <div id="sketch"/>
    );
}

export default DrawSketch;