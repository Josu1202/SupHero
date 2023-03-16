import { Inicio } from './Inicio.js';
import { Game } from './game.js';
import { Niveles } from './Niveles.js';
import { felicidades1 } from './felicidades1.js';
import { gameover1 } from './gameover1.js';
import { Info } from './Info.js';
import { felicidades2 } from './felicidades2.js';
import { gameover2 } from './gameover2.js';
import { medio } from './medio.js';
import { felicidades3 } from './felicidades3.js';
import { gameover3 } from './gameover3.js';
import { dificil } from './dificil.js';
import { Iniciar } from './Iniciar.js';

const config={
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Iniciar,Inicio,Niveles,Game,medio,dificil,felicidades1, gameover1,felicidades2,gameover2,felicidades3,gameover3,Info],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    }
}
var game = new Phaser.Game(config);