import p5 from 'p5';

const sk = (p: p5): void => {

    const scale: number = 16;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;
    let palette: string[];
    //const url: string = 'https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a';
    const url = 'https://coolors.co/003049-d62828-f77f00-fcbf49-eae2b7';

    p.setup = (): void => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight).parent('sketch');
        p.frameRate(5);
        
        p.background(0);
        p.fill(255);
        p.noSmooth();
        p.noStroke();
        palette = p.shuffle(createPalette(url));
        //p.noLoop();
    }

    p.draw = (): void => {
        p.background(palette[0]);
        for (let y=0; y<p.height; y+=scale) {
            for (let x=0; x<p.width; x+=scale) {
                p.fill(p.random(palette));
                p.rect(x, y, scale, scale);
            }
        }
    }

    const createPalette = (url: string): string[] => {
        // ex: https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a
        const slashIdx = url.lastIndexOf('/');
        const colStr = url.slice(slashIdx + 1);
        const cols = colStr.split('-').map(col => '#' + col);
        return cols;
    }
}
export default sk;