import React, { useEffect } from 'react';
import p5 from 'p5';
import sk from './sketches/01sketch/sketch';

const Canvas = (props: any) => {

    useEffect(() => {
        new p5(props.sketch)
    },[props.sketch]);

    return (
        <div id="sketch"/>
    );
}

export default Canvas;