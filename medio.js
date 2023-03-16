export class medio extends Phaser.Scene{

    constructor() {
        super({key: 'medio'});
    }

init(){
    this.score = 0;
    this.combo = 0;
    this.mistake = 0;
    this.NotaLargaTocadaA = 0;
    this.NotaLargaTocadaS = 0;
    this.NotaLargaTocadaD = 0;
    this.NotaLargaTocadaF = 0;
    
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
this.load.image('sig', 'Imagenes/seguir.png');
this.load.image('atras','Imagenes/atras.png');
this.load.image('guita', 'Imagenes/Guitarra.png');
this.load.image('AmarillaL', 'Imagenes/LAmarillo.png')
this.load.image('AzulL', 'Imagenes/LAzul.png')
this.load.image('MoradoL', 'Imagenes/LMorado.png')
this.load.image('NaranjaL', 'Imagenes/LNaranja.png')
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
            this.notalarga();
            this.tocarNotaLargaInicio(keyA,keyS,keyD,keyF);
            this.tocarNotaLargaFinal(keyA,keyS,keyD,keyF);
           this.ejecutarnt1(notas1A,notas1S,notas1D,notas1F);
           this.tocarnt1(notasTocar1A, notasTocar1S, notasTocar1D, notasTocar1F,keyA,keyS,keyD,keyF);
           this.fin();
        }
       })
    
       //funcion del tiempo
       
         //Notas dificultad2
       var notas1A ={
        n1A: 15.5,
        n2A: 17,
        n3A: 29,
        n4A: 30.5,
        n5A: 32,
        n6A: 33.5,
        n7A: 53.5,
        n8A: 55,
        n10A: 61,
        n11A: 67,
        n12A: 85,
        n13A: 86.5,
        n14A: 88,
        n15A: 97,
        n16A: 98.5,
        n17A: 100,
        n18A: 113.5,
        n19A: 115,
        n21A: 121,
        n22A: 122.5,
        n23A: 124,
        n24A: 130,
        n25A: 148,
        n26A: 149.5,
        n27A: 151,
        n28A: 167.5,
        n29A: 170.5,
        n30A: 172,
        n31A: 178,
        n32A: 179
        
        };
        var notas1S ={
        n1S: 18.5,
        n2S: 27.5,
        n3S: 35,
        n4S: 36.5,
        n5S: 46,
        n6S: 47.5,
        n7S: 55,
        n8S: 56.5,
        n9S: 62.5,
        n10S: 64,
        n11S: 65.5,
        n12S: 82,
        n14S: 91,
        n15S: 110.5,
        n16S: 112,
        n17S: 118,
        n18S: 125.5,
        n19S: 127,
        n20S: 128.5,
        n21S: 143.5,
        n22S: 145,
        n24S: 154,
        n25S: 163,
        n26S: 164.5,
        n27S: 178,
        n28S: 179
        };
        var notas1D ={
        n1D: 20,
        n2D: 21.5,
        n3D: 38,
        n4D: 39.5,
        n5D: 45.5,
        n6D: 49,
        n7D: 50.5,
        n8D: 52,
        n9D: 68.5,
        n10D: 70,
        n11D: 71.5,
        n12D: 79,
        n14D: 83.5,
        n15D: 92.5,
        n16D: 103,
        n17D: 107.5,
        n18D: 109,
        n19D: 131.5,
        n20D: 133,
        n21D: 140.5,
        n22D: 142,
        n23D: 146.5,
        n24D: 155.5,
        n26D: 166,
        n27D: 173.5,
        n28D: 175,
        n29D: 176.5,
        n30D: 178,
        n31D: 179
        }
        var notas1F ={
        n1F: 23,
        n2F: 24.5,
        n3F: 26,
        n4F: 41,
        n5F: 42.5,
        n6F: 44,
        n8F: 58,
        n9F: 73,
        n10F: 74.5,
        n11F: 76,
        n12F: 77.5,
        n13F: 94,
        n14F: 95.5,
        n15F: 104.5,
        n16F: 106,
        n17F: 119.5,
        n18F: 134.5,
        n20F: 137.5,
        n21F: 139,
        n22F: 158.5,
        n23F: 160,
        n24F: 161.5,
        n25F: 169,
        n26F: 178,
        n27F: 179
        };
        //nota Largas
        this.notaLA ={
            n9A: 59.5,
            n20A: 116.5,
        };
        this.notaLAI ={
            nT9A: 60.5,
            nT20A: 117.5,
        };
        this.notaLSI={
            nT13S: 90.5,
            nT23S: 153.5,

        };
        this.notaLDI={
            nT13D: 81.5,
            nT25D: 158,
        };
        this.notaLFI={
            nT7F: 57.5,
            nT19F: 137,
        }
        this.notaLAT = {
            n9AT: 61,
            n20A: 118,
        }
        this.notaLS ={
            n13S: 89.5,
            n23S: 152.5
        };
        this.notaLST ={
            n13ST: 91,
            n23ST: 154,
        }
        this.notaLD ={
            n13D: 80.5,
            n25D: 157,
        };
        this.notaLDT ={
            n13DT: 82,
            n25DT: 158.5,
        }
        this.notaLF ={
            n7F: 56.5,
            n19F: 136,
        };
        this.notaLFT ={
            n7FT: 58,
            n19FT: 137.5,
        }
//notasNormales
        var notasTocar1A ={
            nT1A: 16.5,
            nT2A: 18,
            nT3A: 30,
            nT4A: 31.5,
            nT5A: 33,
            nT6A: 34.5,
            nT7A: 54.5,
            nT8A: 56,
            
            nT10A: 62,
            nT11A: 68,
            nT12A: 86,
            nT13A: 87.5,
            nT14A: 89,
            nT15A: 98,
            nT16A: 99.5,
            nT17A: 101,
            nT18A: 114.5,
            nT19A: 116,
            
            nT21A: 122,
            nT22A: 123.5,
            nT23A: 125,
            nT24A: 131,
            nT25A: 149,
            nT26A: 150.5,
            nT27A: 152,
            nT28A: 168.5,
            nT29A: 171.5,
            nT30A: 173,
            nT31A: 179,
            nt32A: 180,
        
        };
        var notasTocar1S ={
            nT1S: 19.5,
            nT2S: 28.5,
            nT3S: 36,
            nT4S: 37.5,
            nT5S: 47,
            nT6S: 48.5,
            nT7S: 56,
            nT8S: 57.5,
            nT9S: 63.5,
            nT10S: 65,
            nT11S: 66.5,
            nT12S: 83,
            
            nT14S: 92,
            nT15S: 111.5,
            nT16S: 113,
            nT17S: 119,
            nT18S: 126.5,
            nT19S: 128,
            nT20S: 129.5,
            nT21S: 144.5,
            nT22S: 146,
            
            nT24S: 155,
            nT25S: 164,
            nT26S: 165.5,
            nT27S: 179,
            nT28S: 180,
        };
        var notasTocar1D ={
            nT1D: 21,
            nT2D: 22.5,
            nT3D: 39,
            nT4D: 40.5,
            nT5D: 46.5,
            nT6D: 50,
            nT7D: 51.5,
            nT8D: 53,
            nT9D: 69.5,
            nT10D: 71,
            nT11D: 72.5,
            nT12D: 80,
            
            nT14D: 84.5,
            nT15D: 93.5,
            nT16D: 104,
            nT17D: 108.5,
            nT18D: 110,
            nT19D: 132.5,
            nT20D: 134,
            nT21D: 141.5,
            nT22D: 143,
            nT23D: 147.5,
            nT24D: 156.5,
            
            nT26D: 167,
            nT27D: 174.5,
            nT28D: 176,
            nT29D: 177.5,
            nT30D: 179,
            nT31D: 180
        };
        var notasTocar1F ={
            nT1F: 24,
            nT2F: 25.5,
            nT3F: 27,
            nT4F: 42,
            nT5F: 43.5,
            nT6F: 45,
            
            nT8F: 59,
            nT9F: 74,
            nT10F: 75.5,
            nT11F: 77,
            nT12F: 78.5,
            nT13F: 95,
            nT14F: 96.5,
            nT15F: 105.5,
            nT16F: 107,
            nT17F: 120.5,
            nT18F: 135.5,
            
            nT20F: 138.5,
            nT21F: 140,
            nT22F: 159.5,
            nT23F: 161,
            nT24F: 162.5,
            nT25F: 170,
            nT26F: 179,
            nT27F: 180,
        
        };

    
        //fondo, gameover y marcadores
        
this.add.image(400,250, 'fondo');
this.add.image(400,250, 'guita');
this.Atras = this.add.image(50, 450, 'atras').setInteractive();
this.Atras.on('pointerdown', () => {
    this.boton.play(this.butonconfig);
    this.song1.pause();
   this.scene.start('Niveles');
})

this.fallo = this.add.text(140,100,'OOPS Has Cometido Muchos Fallos',{
    fontSize: '30px',
    fill: '#FF3204',
    strokeThickness: 3,
    stroke: '#fff',
    fontFamily: 'verdana, arial, sans-serif'
});
this.completed = this.add.text(150,100,'WAOS ¡Lo lograste! Felicidades',{
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
 this.scene.start('felicidades2');
})
this.resume.on('pointerdown', () =>{
    this.boton.play(this.butonconfig);
    this.scene.start('gameover2');
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
this.songD = this.sound.add('Defeat');
this.boton = this.sound.add('boton');
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
}
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
contador(){
    this.tiempo += 0.5
    console.log(this.tiempo);
   };
   //NOTAS LARGAS
notalarga(){
for (const ntLargaA in this.notaLA) {
    if (this.notaLA[ntLargaA] == this.tiempo) {
        var NLAmarilla = this.physics.add.image(235,-100,'AmarillaL');
        NLAmarilla.setVelocity(0,260);
        
    }
}
for (const ntLargaS in this.notaLS) {
    if (this.notaLS[ntLargaS] == this.tiempo) {
        var NLAzul = this.physics.add.image(345,-100,'AzulL');
        NLAzul.setVelocity(0,260);
        
    }
}
for (const ntLargaD in this.notaLD) {
    if (this.notaLD[ntLargaD] == this.tiempo) {
        var NLMorado = this.physics.add.image(460,-100,'MoradoL');
        NLMorado.setVelocity(0,260);
        
    }
}
for (const ntLargaF in this.notaLF) {
    if (this.notaLF[ntLargaF] == this.tiempo) {
        var NLNaranja = this.physics.add.image(570,-100,'NaranjaL');
        NLNaranja.setVelocity(0,260);
        
    }
}
}
tocarNotaLargaInicio(TIA,TIS,TID,TIF){
    for (const nTIA in this.notaLAI) {
        if (this.notaLAI[nTIA] == this.tiempo ) {
            if(this.notaLAI[nTIA] == this.tiempo && TIA.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
                this.NotaLargaTocadaA = 1;
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    };
    for (const nTIS in this.notaLSI) {
        if (this.notaLSI[nTIS] == this.tiempo ) {
            if(this.notaLSI[nTIS] == this.tiempo && TIS.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
                this.NotaLargaTocadaS = 1;
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
            }
            
        }
    };
    for (const nTID in this.notaLDI) {
        if (this.notaLDI[nTID] == this.tiempo ) {
            if(this.notaLDI[nTID] == this.tiempo && TID.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
                this.NotaLargaTocadaD = 1;
            }else{
                this.ErrorS.play(this.noteitasconfig);
                this.comboReg.push(this.combo);
                this.combo *= 0;
                this.comboText.setText('COMBO: ' + this.combo);
                this.mistake += 1;
                
            }
            
        }
    };
    for (const nTIF in this.notaLFI) {
        if (this.notaLFI[nTIF] == this.tiempo ) {
            if(this.notaLFI[nTIF] == this.tiempo && TIF.isDown){
                this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo)
                this.NotaLargaTocadaF = 1;
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
tocarNotaLargaFinal(TA,TS,TD,TF){
            for (const tocarLA in this.notaLAT) {
                if (this.notaLAT[tocarLA] == this.tiempo) {
                    if(this.notaLAT[tocarLA] == this.tiempo && TA.isUp && this.NotaLargaTocadaA == 1){
                        this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo);
                this.NotaLargaTocadaA = 0;
                    }else{
                        this.ErrorS.play(this.noteitasconfig);
                        this.comboReg.push(this.combo);
                        this.combo *= 0;
                        this.comboText.setText('COMBO: ' + this.combo);
                        this.mistake += 1;
                        this.NotaLargaTocadaA = 0;
                    }
                    
                }
            };
            for (const tocarLS in this.notaLST) {
                if (this.notaLST[tocarLS] == this.tiempo) {
                    if(this.notaLST[tocarLS] == this.tiempo && TS.isUp && this.NotaLargaTocadaS == 1){
                        this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo);
                this.NotaLargaTocadaS = 0;

                    }else{
                        this.ErrorS.play(this.noteitasconfig);
                        this.comboReg.push(this.combo);
                        this.combo *= 0;
                        this.comboText.setText('COMBO: ' + this.combo);
                        this.mistake += 1;
                        this.NotaLargaTocadaS = 0;
                    }
                    
                }
            };
            for (const tocarLD in this.notaLDT) {
                if (this.notaLDT[tocarLD] == this.tiempo) {
                    if(this.notaLDT[tocarLD] == this.tiempo && TD.isUp && this.NotaLargaTocadaD == 1){
                        this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo);
                this.NotaLargaTocadaD = 0;
                    }else{
                        this.ErrorS.play(this.noteitasconfig);
                        this.comboReg.push(this.combo);
                        this.combo *= 0;
                        this.comboText.setText('COMBO: ' + this.combo);
                        this.mistake += 1;
                        this.NotaLargaTocadaD = 0;
                    }
                    
                }
            };
            for (const tocarLF in this.notaLFT) {
                if (this.notaLFT[tocarLF] == this.tiempo) {
                    if(this.notaLFT[tocarLF] == this.tiempo && TF.isUp && this.NotaLargaTocadaF == 1){
                        this.AciertoS.play(this.noteitasconfig);
                this.score += 10;
                this.combo ++;
                this.scoreText.setText('PUNTOS: ' + this.score);
                this.comboText.setText('COMBO: ' + this.combo);
                this.NotaLargaTocadaF = 0;
                    }else{
                        this.ErrorS.play(this.noteitasconfig);
                        this.comboReg.push(this.combo);
                        this.combo *= 0;
                        this.comboText.setText('COMBO: ' + this.combo);
                        this.mistake += 1;
                        this.NotaLargaTocadaF = 0;
                    }
                    
                }
            }
        }

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
            cirAmarillo.setVelocity(0,260);
        }
    }
    for (const nsS in nts1S) {
        if (nts1S[nsS] == this.tiempo) {
            var cirAzul = this.physics.add.image(345, 30, 'Cazul');
            cirAzul.setVelocity(0,260);
        }
    }
    for (const nsD in nts1D) {
        if (nts1D[nsD] == this.tiempo) {
            var cirMorado = this.physics.add.image(460, 30, 'Cmorado');
            cirMorado.setVelocity(0,260);
        }
    }
    for (const nsF in nts1F) {
        if (nts1F[nsF] == this.tiempo) {
            var cirNaranja = this.physics.add.image(570, 30, 'Cnaranja');
            cirNaranja.setVelocity(0,260);
        }
    }
    }
    fin(){
        if(this.mistake == 10){
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
    

