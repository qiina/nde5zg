import p5 from 'p5';
import {Snow} from './materials'

const sk = (p: p5): void => {

    // 4の倍数にする
    const scale: number = 4;
    const canvasWidth: number = Math.floor(p.windowWidth / scale) * scale - 32;
    const canvasHeight: number = 400;

    // snowデータ関連
    let snows: Snow[] = [];
    const numOfSnow: number = 30;
    let numOfSnowObj: number;
    let randVal: number;
    
    p.setup = (): void => {
        // キャンバスを生成して#sketchの子に配置する
        p.createCanvas(canvasWidth, canvasHeight).parent('sketch');
        p.frameRate(25);
        initSnow();
        
        p.background(0);
        p.fill(255);
        p.noSmooth();
        p.rectMode(p.CENTER);
    }

    p.draw = (): void => {
        p.background(0);

        drawSnow();
        updateSnow();
    }

    p.keyPressed = (): void => {
        initSnow();
    }

    // functions
    const initSnow = (): void => {
        snows = [];
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
            if(snows[i].y < p.height) { snows[i].y += snows[i].speed; } 
            else { snows[i].y = 0; }
        }
    }
}

export default sk;