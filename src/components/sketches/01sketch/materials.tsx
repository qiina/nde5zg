import p5 from 'p5';
interface Figures {
    x: number,
    y: number
};

interface Snow extends Figures {
    scale: number,
    speed: number
};

interface Ripple extends Figures {
    diameter: number
};

export type {Snow, Ripple};