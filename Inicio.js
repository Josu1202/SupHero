export class Inicio extends Phaser.Scene{
    constructor(){
        super({key: 'Inicio'});
    }
    preload() {
     this.load.image('logo','Imagenes/Logo.png');
     this.load.image('start','Imagenes/Start.png');
     this.load.image('fondo1','Imagenes/fondo.jpg');
     this.load.image('inf', 'Imagenes/info.png')
     this.load.audio('sonidoF','audios/sonidofondo.mp3')
     this.load.audio('boton', 'audios/Boton.mp3');
    }
    create(){
    
        this.add.image(400,250, 'fondo1');
this.add.image(400, 200, 'logo');
this.StartButton = this.add.image(400, 300, 'start').setInteractive();
this.StartButton.on('pointerdown', () =>{
    this.fondosong.pause();
    this.boton.play(this.butonconfig);
    this.scene.start('Niveles');
    
});
this.information = this.add.image(400,450, 'inf').setInteractive();
this.information.on('pointerdown', () =>{
    this.fondosong.pause();
    this.boton.play(this.butonconfig);
    this.scene.start('Info');
    
});
this.boton = this.sound.add('boton');
this.fondosong = this.sound.add('sonidoF');
    this.musicConfigg = {
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
this.fondosong.play(this.musicConfigg);

    }
    update(){


    }
}