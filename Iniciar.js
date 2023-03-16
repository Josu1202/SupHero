import { Inicio } from "./Inicio";

export class Iniciar extends Phaser.Scene{
    constructor(){
        super({key: 'Iniciar'});
    }
    preload(){

    }
    create(){
this.keyE;
this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
this.fallo = this.add.text(190, 250, 'Presiona "E" para empezar',{
    fontSize: '30px',
    fill: '#fff',
    strokeThickness: 3,
    stroke: '#fff',
    fontFamily: 'verdana, arial, sans-serif'
});

    }
    update(){
if(this.keyE.isDown){
    this.scene.start('Inicio');
    
}
    }
}