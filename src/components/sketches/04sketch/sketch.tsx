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
        p.createCanvas(canvasWidth, canvasHeight, p.WEBGL).parent('sketch');
        p.frameRate(30);
    }

    p.draw = (): void => {
    p.background(255);

	//マテリアルを設定
	p.ambientLight(160);
	p.pointLight(210, 160, 255, -100, -100, 400);
	p.noStroke();
	p.ambientMaterial(255);

	p.rotateY(p.frameCount / 400.0);
	p.rotateX(p.frameCount / 600.0);

	//回転をくりかえしながら立方体を描画
	for (let i = 0; i < 300; i++) {
		p.push();
		p.specularMaterial(i * 2, 127, 255 - i * 2);
		p.rotateX(p.frameCount / 240.0 + i / 20.0);
		p.rotateY(p.frameCount / 240.0 + i / 22.0);
		p.rotateZ(p.frameCount / 240.0 + i / 24.0);
		p.box(p.width / 2.0);
		p.pop();
	}
    }
}
export default sk;