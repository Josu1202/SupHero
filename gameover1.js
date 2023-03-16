import { Game } from "./game";

export class gameover1 extends Phaser.Scene{
    constructor(){
        super({key: 'gameover1'});
    }
    preload(){
        this.load.image('fondo2','Imagenes/fondote.jpg');
        this.load.image('gameover', 'Imagenes/gameover.png');
        this.load.image('restart', 'Imagenes/Restart.png');
        this.load.image('atras','Imagenes/atras.png');
        this.load.audio('boton', 'audios/Boton.mp3');
    }
    create(){
        this.add.image(400,250, 'fondo2');
        this.add.image(400, 100, 'gameover');
        this.boton = this.sound.add('boton');
        this.reStart = this.add.image(400, 250, 'restart').setInteractive();
        this.reStart.on('pointerdown', () => {
            this.boton.play(this.butonconfig);
           this.scene.start('game');
        })
        this.Atras = this.add.image(400, 400, 'atras').setInteractive();
        this.Atras.on('pointerdown', () => {
            this.boton.play(this.butonconfig);
           this.scene.start('Niveles');
        });
        this.butonconfig ={
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay:0
        };
    }
}