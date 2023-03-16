export class Info extends Phaser.Scene{
    constructor(){
        super({key: 'Info'});
    }
    preload() {
     this.load.image('informacion','Imagenes/como.png');
     this.load.image('fondo1','Imagenes/fondo.jpg');
     this.load.image('atras','Imagenes/atras.png');
     this.load.audio('audiofon', 'audios/musicfondo.mp3');
     this.load.audio('boton', 'audios/Boton.mp3');
    }
    create(){
        this.add.image(400,250, 'fondo1');
        this.add.image(400, 250, 'informacion');
        this.Atras = this.add.image(50, 450, 'atras').setInteractive();
        this.Atras.on('pointerdown', () => {
            this.fondinsong.pause();
            this.boton.play(this.butonconfig);
           this.scene.start('Inicio');
        })
        this.fondinsong = this.sound.add('audiofon');
        this.boton = this.sound.add('boton');
        var musicConfigg = {
        mute: false,
        volume: 0.2,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay:0
    };
    this.butonconfig ={
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay:0
    };
    this.fondinsong.play(musicConfigg);
    


    }
    update(){


    }
}