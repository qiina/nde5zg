import p5 from 'p5';

const sk = (p: p5): void => {

    const scale: number = 4;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;

    p.setup = (): void => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight).parent('sketch');
        p.frameRate(25);
        
        p.background(0);
        p.fill(255);
        p.noSmooth();
        p.rectMode(p.CENTER);
    }

    p.draw = (): void => {
        p.background(20);
    }
}
export default sk;