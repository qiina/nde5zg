import p5 from 'p5';
import u from './sketchUtils';

const sk = (p: p5): void => {
    //const canvasWidth = p.windowWidth -30;

    // 4の倍数にする
    const scale: number = 4;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;

    // snowデータ関連
    let snows: Snow[] = [];
    const numOfSnow: number = 30;
    let numOfSnowObj: number;
    let randVal: number;

    // 波紋関連
    let ripples: Ripple[] = [];
    
    p.setup = (): void => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight).parent('sketch');
        p.frameRate(25);
        initSnow();

        p.background(0);
        p.fill(255);
        p.noSmooth();
    }

    p.draw = (): void => {
        p.background(0);

        drawSnow();
        updateSnow();

        if(ripples.length) {
            drawRipple();
            updateRipple();
        }
        
    }

    p.touchStarted = (): void => {
        createRipple(p.mouseX, p.mouseY);
    }

    // functions
    const initSnow = (): void => {
        for (let i=0; i<numOfSnow; i++) {
            randVal = p.random(1,5);
            snows[i] = {x: p.random(canvasWidth), y: p.random(-100, -10), scale: randVal, speed: randVal};
        }
    }

    const drawSnow = (): void => {
        p.noStroke();
        numOfSnowObj = snows.length;
        for (let i=0; i<numOfSnowObj; i++) {
            if (snows[i].scale > 4) {
                p.fill(180);
            } else {
                p.fill(255);
            }
            p.rect(snows[i].x, snows[i].y, snows[i].scale, snows[i].scale);
        }
    }

    const updateSnow = (): void => {
        numOfSnowObj = snows.length;
        for (let i=0; i<numOfSnowObj; i++) {
            if(snows[i].y < p.height) {
                //snows[i].x += -snows[i].speed;
                snows[i].y += snows[i].speed;
            } else {
                snows[i].y = 0;
            }
        }
    }

    const createRipple = (inX: number, inY: number): void => {
        ripples.push({x: inX, y: inY, diameter: 1});
    }

    const drawRipple = (): void => {
        p.noFill();
        p.stroke(255);
        ripples.forEach((ripple) => {
            p.circle(ripple.x, ripple.y, ripple.diameter);
        })
    }

    const updateRipple = (): void => {
       ripples.forEach((_, idx) => {
           ripples[idx].diameter += 2;
       })
    }

    // define materials
    interface Figures {
        x: number,
        y: number
    }

    interface Snow extends Figures {
        scale: number,
        speed: number
    };

    interface Ripple extends Figures {
        diameter: number
    }
}

export default sk;