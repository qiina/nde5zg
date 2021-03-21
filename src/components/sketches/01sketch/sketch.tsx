import p5 from 'p5';

const sk = (p: p5): void => {
    //const canvasWidth = p.windowWidth -30;

    // ～の倍数にする
    const scale: number = 4;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;

    // snowデータを格納する配列
    let snows: Snow[] = [];
    const numOfSnow: number = 10;
    let numOfSnowObj: number;
    const step = 2;
    
    p.setup = () => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight).parent('sketch');
        initSnow();

        p.fill(255);
        p.noSmooth();
    }

    p.draw = () => {
        p.background(0);

        numOfSnowObj = snows.length;
        drawSnow();
        updateSnow();
    }

    // functions
    const initSnow = (): void => {
        for (let i=0; i<numOfSnow; i++) {
            snows[i] = {x: p.random(0, canvasWidth), y: 0, scale: scale};
        }
    }

    const drawSnow = (): void => {
        for (let i=0; i<numOfSnowObj; i++) {
            p.rect(snows[i].x, snows[i].y, snows[i].scale, snows[i].scale);
        }
    }

    const updateSnow = (): void => {
        for (let i=0; i<numOfSnowObj; i++) {
            if(snows[i].y < p.height) {
                snows[i].y += step;
            } else {
                snows[i].y = 0;
            }
        }
    }

    // define materials
    interface Snow {
        x: number,
        y: number,
        scale: number
    };
}

export default sk;