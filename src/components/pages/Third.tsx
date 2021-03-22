import '../../App.css';
import Canvas from '../Canvas';
import RandomString from '../RandomString';
import sketch3 from '../sketches/04sketch/sketch';

const Third = () => (
        <>
        <Canvas sketch={sketch3}/>
        <RandomString/>
        </>
);

export default Third;