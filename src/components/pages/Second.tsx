import '../../App.css';
import Canvas from '../Canvas';
import RandomString from '../RandomString';
import sketch2 from '../sketches/02sketch/sketch';

const Second = () => (
        <>
        <Canvas sketch={sketch2}/>
        <RandomString/>
        </>
);

export default Second;