export class Niveles extends Phaser.Scene{
    constructor(){
        super({key: 'Niveles'});
    }
    preload() {
     this.load.image('logo','Imagenes/Logo.png');
     this.load.image('fondo1','Imagenes/fondo.jpg');
     this.load.image('facil','Imagenes/Facil.png');
     this.load.image('medio','Imagenes/Medio.png');
     this.load.image('dificil','Imagenes/Dificil.png');
     this.load.image('atras','Imagenes/atras.png');
     this.load.audio('nivmusic', 'audios/nivelesmusic.mp3')
     this.load.audio('boton', 'audios/Boton.mp3');
    }
    create(){
        this.add.image(400,250, 'fondo1');
this.add.image(400, 150, 'logo');
this.FacilButton = this.add.image(400, 250, 'facil').setInteractive();
this.FacilButton.on('pointerdown', () => {
    this.nivS.pause();
    this.boton.play(this.butonconfig);
this.scene.start('game');
});
this.Medio = this.add.image(400, 350, 'medio').setInteractive();
this.Medio.on('pointerdown', () =>{
    this.nivS.pause();
    this.boton.play(this.butonconfig);
this.scene.start('medio');
})
this.Dificil = this.add.image(400, 450, 'dificil').setInteractive();
this.Dificil.on('pointerdown', () =>{
    this.nivS.pause();
    this.boton.play(this.butonconfig);
    this.scene.start('dificil');
})
this.Atras = this.add.image(50, 450, 'atras').setInteractive();
        this.Atras.on('pointerdown', () => {
            this.nivS.pause();
            this.boton.play(this.butonconfig);
           this.scene.start('Inicio');
        })
        this.nivS= this.sound.add('nivmusic');
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
    }
    this.nivS.play(musicConfigg);


    }
    update(){


    }
}