
export class Game extends Phaser.Scene{

    constructor() {
        super({key: 'game'});
    }

init(){
    this.score = 0;
    this.combo = 0;
    this.mistake = 0;
    
}
    preload() {
this.load.image('fondo','Imagenes/fondito.jpg');
this.load.image('amarillo','Imagenes/amarilla.png');
this.load.image('azul','Imagenes/azul.png');
this.load.image('morada','Imagenes/morada.png');
this.load.image('naranja','Imagenes/naranja.png');
this.load.audio('cancion1','audios/cancion1.mp3');
this.load.audio('Victory','audios/Victoria.mp3');
this.load.audio('Defeat','audios/Derrota.mp3');
this.load.audio('boton', 'audios/Boton.mp3');
this.load.audio('Acierto', 'audios/Acierto.mp3');
this.load.audio('Error', 'audios/Error.mp3');
this.load.image('Camarillo','Imagenes/Camarillo.png');
this.load.image('Cazul','Imagenes/Cazul.png');
this.load.image('Cmorado','Imagenes/Cmorado.png');
this.load.image('Cnaranja','Imagenes/Cnaranja.png');
this.load.image('sig', 'Imagenes/seguir.png')
this.load.image('atras','Imagenes/atras.png');
this.load.image('guita', 'Imagenes/Guitarra.png')
    }
    create() {
        //variables
        this.comboReg = [];
       this.tiempo = 0;
  
        //loop
       this.time.addEvent({
        delay: 500,
        loop: true,
        callback: () => {
            this.contador();
           this.ejecutarnt1(notas1A,notas1S,notas1D,notas1F);
           this.tocarnt1(notasTocar1A, notasTocar1S, notasTocar1D, notasTocar1F,keyA,keyS,keyD,keyF);
           this.fin();
        }
       })
    

     
         //Notas dificultad1
       var notas1A ={
        n1A: 16,
        n2A: 17.5,
        n3A: 29.5,
        n4A: 31,
        n5A: 32.5,
        n6A: 34,
        n7A: 54,
        n8A: 55.5,
        n9A: 60,
        n10A: 61.5,
        n11A: 67.5,
        n12A: 85.5,
        n13A: 87,
        n14A: 88.5,
        n15A: 97.5,
        n16A: 99,
        n17A: 100.5,
        n18A: 114,
        n19A: 115.5,
        n20A: 117,
        n21A: 121.5,
        n22A: 123,
        n23A: 124.5,
        n24A: 130.5,
        n25A: 148.5,
        n26A: 150,
        n27A: 151.5,
        n28A: 168,
        n29A: 171,
        n30A: 172.5,
        n31A: 178.5
        
        };
        var notas1S ={
        n1S: 19,
        n2S: 28,
        n3S: 35.5,
        n4S: 37,
        n5S: 46.5,
        n6S: 48,
        n7S: 55.5,
        n8S: 57,
        n9S: 63,
        n10S: 64.5,
        n11S: 66,
        n12S: 82.5,
        n13S: 90,
        n14S: 91.5,
        n15S: 111,
        n16S: 112.5,
        n17S: 118.5,
        n18S: 126,
        n19S: 127.5,
        n20S: 129,
        n21S: 144,
        n22S: 145.5,
        n23S: 153,
        n24S: 154.5,
        n25S: 163.5,
        n26S: 165,
        n27S: 178.5,
        };
        var notas1D ={
        n1D: 20.5,
        n2D: 22,
        n3D: 38.5,
        n4D: 40,
        n5D: 46,
        n6D: 49.5,
        n7D: 51,
        n8D: 52.5,
        n9D: 69,
        n10D: 70.5,
        n11D: 72,
        n12D: 79.5,
        n13D: 81,
        n14D: 84,
        n15D: 93,
        n16D: 103.5,
        n17D: 108,
        n18D: 109.5,
        n19D: 132,
        n20D: 133.5,
        n21D: 141,
        n22D: 142.5,
        n23D: 147,
        n24D: 156,
        n25D: 157.5,
        n26D: 166.5,
        n27D: 174,
        n28D: 175.5,
        n29D: 177,
        n30D: 178.5
        }
        var notas1F ={
        n1F: 23.5,
        n2F: 25,
        n3F: 26.5,
        n4F: 41.5,
        n5F: 43,
        n6F: 44.5,
        n7F: 57,
        n8F: 58.5,
        n9F: 73.5,
        n10F: 75,
        n11F: 76.5,
        n12F: 78,
        n13F: 94.5,
        n14F: 96,
        n15F: 105,
        n16F: 106.5,
        n17F: 120,
        n18F: 135,
        n19F: 136.5,
        n20F: 138,
        n21F: 139.5,
        n22F: 159,
        n23F: 160.5,
        n24F: 162,
        n25F: 169.5,
        n26F: 178.5,
        };
        var notasTocar1A ={
            nT1A: 17.5,
            nT2A: 19,
            nT3A: 31,
            nT4A: 32.5,
            nT5A: 34,
            nT6A: 35.5,
            nT7A: 55.5,
            nT8A: 57,
            nT9A: 61.5,
            nT10A: 63,
            nT11A: 69,
            nT12A: 87,
            nT13A: 88.5,
            nT14A: 90,
            nT15A: 99,
            nT16A: 100.5,
            nT17A: 102,
            nT18A: 115.5,
            nT19A: 117,
            nT20A: 118.5,
            nT21A: 123,
            nT22A: 124.5,
            nT23A: 126,
            nT24A: 132,
            nT25A: 150,
            nT26A: 151.5,
            nT27A: 153,
            nT28A: 169.5,
            nT29A: 172.5,
            nT30A: 174,
            nT31A: 180,
        
        }
        var notasTocar1S ={
            nT1S: 20.5,
            nT2S: 29.5,
            nT3S: 37,
            nT4S: 38.5,
            nT5S: 48,
            nT6S: 49.5,
            nT7S: 57,
            nT8S: 58.5,
            nT9S: 64.5,
            nT10S: 66,
            nT11S: 67.5,
            nT12S: 84,
            nT13S: 91.5,
            nT14S: 93,
            nT15S: 112.5,
            nT16S: 114,
            nT17S: 120,
            nT18S: 127.5,
            nT19S: 129,
            nT20S: 130.5,
            nT21S: 145.5,
            nT22S: 147,
            nT23S: 154.5,
            nT24S: 156,
            nT25S: 165,
            nT26S: 166.5,
            nT27S: 180,
        };
        var notasTocar1D ={
            nT1D: 22,
            nT2D: 23.5,
            nT3D: 40,
            nT4D: 41.5,
            nT5D: 47.5,
            nT6D: 51,
            nT7D: 52.5,
            nT8D: 54,
            nT9D: 70.5,
            nT10D: 72,
            nT11D: 73.5,
            nT12D: 81,
            nT13D: 82.5,
            nT14D: 85.5,
            nT15D: 94.5,
            nT16D: 105,
            nT17D: 109.5,
            nT18D: 111,
            nT19D: 133.5,
            nT20D: 135,
            nT21D: 142.5,
            nT22D: 144,
            nT23D: 148.5,
            nT24D: 157.5,
            nT25D: 159,
            nT26D: 168,
            nT27D: 175.5,
            nT28D: 177,
            nT29D: 178.5,
            nT30D: 180,
        };
        var notasTocar1F ={
            nT1F: 25,
            nT2F: 26.5,
            nT3F: 28,
            nT4F: 43,
            nT5F: 44.5,
            nT6F: 46,
            nT7F: 58.5,
            nT8F: 60,
            nT9F: 75,
            nT10F: 76.5,
            nT11F: 78,
            nT12F: 79.5,
            nT13F: 96,
            nT14F: 97.5,
            nT15F: 106.5,
            nT16F: 108,
            nT17F: 121.5,
            nT18F: 136.5,
            nT19F: 138,
            nT20F: 139.5,
            nT21F: 141,
            nT22F: 160.5,
            nT23F: 162,
            nT24F: 163.5,
            nT25F: 171,
            nT26F: 180,
        
        };

    
        //fondo, gameover y marcadores
        
this.add.image(400,250, 'fondo');
this.add.image(400,250, 'guita');
this.Atras = this.add.image(50, 450, 'atras').setInteractive();
this.Atras.on('pointerdown', () => {
    this.song1.pause();
    this.boton.play(this.butonconfig);
   this.scene.start('Niveles');
})

this.fallo = this.add.text(140,100,'OOPS Has Cometido Muchos Fallos',{
    fontSize: '30px',
    fill: '#FF3204',
    strokeThickness: 3,
    stroke: '#fff',
    fontFamily: 'verdana, arial, sans-serif'
});
this.completed = this.add.text(150,100,'WAOS ¡Lo lograste!, Felicidades',{
    fontSize: '30px',
    fill: '#FFED14',
    strokeThickness: 3,
    stroke: '#000',
    fontFamily: 'verdana, arial, sans-serif'
});
this.scoreText= this.add.text(16,16,'PUNTOS: 0',{
    fontSize: '20px',
    fill: '#fff',

    fontFamily: 'verdana, arial, sans-serif'
});
this.scoreText1= this.add.text(300,200,'PUNTOS TOTALES: 0',{
    fontSize: '20px',
    fill: '#FF8840',
    strokeThickness: 3,
    stroke: '#000',
    fontFamily: 'verdana, arial, sans-serif'
});
this.comboText= this.add.text(670,16,'COMBO: 0',{
    fontSize: '20px',
    fill: '#fff',
    fontFamily: 'verdana, arial, sans-serif'
});
this.comboText1= this.add.text(300,300,'COMBO MÁXIMO: 0',{
    fontSize: '20px',
    fill: '#FF8840',
    strokeThickness: 3,
    stroke: '#000',
    fontFamily: 'verdana, arial, sans-serif'
});
this.scoreText1.visible = false;
this.comboText1.visible = false;
this.fallo.visible = false;
this.completed.visible = false;
this.resume = this.add.image(400,400, 'sig').setInteractive();
this.resume1 = this.add.image(400,400, 'sig').setInteractive();
this.resume1.on('pointerdown', () => {
    this.boton.play(this.butonconfig);
 this.scene.start('felicidades1');
})
this.resume.on('pointerdown', () =>{
    this.boton.play(this.butonconfig);
    this.scene.start('gameover1');
})
this.resume.visible = false;
this.resume1.visible = false;
//Pads
this.pAmarilla = this.add.image(235,460, 'amarillo');
this.pAzul = this.add.image(345,460, 'azul');
this.Pmorada = this.add.image(460,460, 'morada');
this.pNaranja = this.add.image(570,460, 'naranja');
//sonido
this.songV = this.sound.add('Victory');
this.boton = this.sound.add('boton');
this.songD = this.sound.add('Defeat');
this.AciertoS = this.sound.add('Acierto');
this.ErrorS = this.sound.add('Error');
this.song1 = this.sound.add('cancion1');
    this.musicConfig = {
    mute: false,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
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
this.noteitasconfig ={
    mute: false,
    volume: 0.5,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay:0 
};
this.song1.play(this.musicConfig);

//probando círculos XDDDD

//teclas
this.cursors = this.input.keyboard.createCursorKeys();
var keyA;
var keyS;
var keyD;
var keyF;
this.keyP;
keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
//si
    this.pausa = 0

    }
    
    update(){
      
}
contador (){
    this.tiempo += 0.5
    console.log(this.tiempo);
   };

tocarnt1(notaT1A, notaT1S, notaT1D, notaT1F, TeclaA, TeclaS, TeclaD, TeclaF){
    for (const nsTA in notaT1A) {
        if (notaT1A[nsTA] == this.tiempo ) {
            if(notaT1A[nsTA] == this.tiempo && TeclaA.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
                
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    }
    for (const nsTS in notaT1S) {
        if (notaT1S[nsTS] == this.tiempo ) {
            if(notaT1S[nsTS] == this.tiempo && TeclaS.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    }
    for (const nsTD in notaT1D) {
        if (notaT1D[nsTD] == this.tiempo ) {
            if(notaT1D[nsTD] == this.tiempo && TeclaD.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    }
    for (const nsTF in notaT1F) {
        if (notaT1F[nsTF] == this.tiempo ) {
            if(notaT1F[nsTF] == this.tiempo && TeclaF.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    }
}
ejecutarnt1(nts1A,nts1S,nts1D,nts1F){

    for (const nsA in nts1A) {
        if (nts1A[nsA] == this.tiempo) {
            var cirAmarillo =  this.physics.add.image(235, 30, 'Camarillo');
            cirAmarillo.setVelocity(0,-20);
            
        }
    }
    for (const nsS in nts1S) {
        if (nts1S[nsS] == this.tiempo) {
            var cirAzul = this.physics.add.image(345, 30, 'Cazul');
            cirAzul.setVelocity(0,-20);
        }
    }
    for (const nsD in nts1D) {
        if (nts1D[nsD] == this.tiempo) {
            var cirMorado = this.physics.add.image(460, 30, 'Cmorado');
            cirMorado.setVelocity(0,-20);
        }
    }
    for (const nsF in nts1F) {
        if (nts1F[nsF] == this.tiempo) {
            var cirNaranja = this.physics.add.image(570, 30, 'Cnaranja');
            cirNaranja.setVelocity(0,0);
        }
    }
    }
    fin(){
        if(this.mistake == 15){
            this.scoreText.visible = false;
            this.comboText.visible = false;
            this.fallo.visible = true;
            this.scoreText1.visible = true;
            this.comboText1.visible = true;
            this.scoreText1.setText('PUNTOS TOTALES: ' + this.score);
            this.resume.visible = true;
            this.comboMax = Math.max(...this.comboReg);
            this.comboText1.setText('COMBO MÁXIMO: '+ this.comboMax)
            
            this.song1.pause();
            this.songD.play(this.musicConfig);
            this.mistake ++;
            this.tiempo = -200;
        }
        if(this.tiempo == 190){
            this.scoreText.visible = false;
            this.comboText.visible = false;
            this.completed.visible = true;
            this.scoreText1.visible = true;
            this.comboText1.visible = true;
            this.scoreText1.setText('PUNTOS TOTALES: ' + this.score);
            this.resume1.visible = true;
            this.comboReg.push(this.combo);
            this.comboMax = Math.max(...this.comboReg);
            this.comboText1.setText('COMBO MÁXIMO: '+ this.comboMax)

            this.song1.pause();
            this.songV.play(this.musicConfig);
           

        }

    }

    }
    

