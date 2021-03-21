import p5 from 'p5';

const sk = (p: p5): void => {

    const scale: number = 16;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;
    let palette: string[];
    //const url: string = 'https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a';
    const url = 'https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7';

    p.preload = (): void => {
        
    }

    p.setup = (): void => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight, p.WEBGL).parent('sketch');
        p.frameRate(30);
        
        p.background(0);
        //p.noLoop();
    }

    p.mousePressed = (): void => {

    }

    p.draw = (): void => {
        p.background(255);
        p.translate(0, 0, 0);
        // 濃紺のアンビエントライト
        p.ambientLight(0, 50, 255);
        // 左上から照らす黄色のポイントライト
        //p.pointLight(0, 50, 255, -120, -120, 0);
        // 左から照らす、白色の方向性ライト
        p.directionalLight(255, 255, 255, 1, 0, 0);
        p.specularMaterial(0, 50, 50);
        p.push();
        p.rotateZ(p.frameCount * 0.02);
        //p.rotateX(p.frameCount * 0.02);
        p.rotateY(p.frameCount * 0.02);
        p.torus(100, 40);
        p.pop();
    }
}
export default sk;