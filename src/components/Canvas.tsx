import React, { useEffect, useState } from 'react';
import _p5 from 'p5';
import styled from 'styled-components';

let p5Instance: _p5;

const Canvas = (props: any) => {

    const Div = styled.div`
        margin: 16px 0 5px;
    `;

    const [p5, setP5] = useState(0);
    const wrapper = React.createRef();
  
    useEffect(() => {
        if (p5Instance) p5Instance.remove();
        p5Instance = new _p5(props.sketch);
    },[props.sketch]);

    return (
        <Div>
            <div id="sketch"/>
        </Div>
    );
}

export default Canvas;