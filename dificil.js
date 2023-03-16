export class dificil extends Phaser.Scene{

    constructor() {
        super({key: 'dificil'});
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
this.load.image('sig', 'Imagenes/seguir.png')
this.load.image('atras','Imagenes/atras.png');
this.load.image('guita', 'Imagenes/Guitarra.png');
this.load.image('AmarillaL', 'Imagenes/LAmarillo.png');
this.load.image('AzulL', 'Imagenes/LAzul.png');
this.load.image('MoradoL', 'Imagenes/LMorado.png');
this.load.image('NaranjaL', 'Imagenes/LNaranja.png');
    }
    create() {
        //variables
        this.comboReg = [];
       this.tiempooo = 0;
       this.tiempo = 0
  
        //loop
       this.time.addEvent({
        delay: 100,
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
       
         //Notas dificultad1
       var notas1A ={
        n1A: 15,
        n2A: 16.5,
        n3A: 28.5,
        n4A: 30,
        n5A: 31.5,
        n6A: 33,
        n7A: 53,
        n9A: 59,
        n10A: 60.5,
        n11A: 66.5,
        n12A: 84.5,
      
        n14A: 87.5,
        n15A: 96.5,
        n16A: 98,
        n17A: 99.5,
        n18A: 113,
        
        n20A: 116,
        n21A: 120.5,
        n22A: 122,
        
        n24A: 129.5,
        n25A: 147.5,
        n26A: 149,
        n27A: 150.5,
        n28A: 167,
        
        n30A: 171.5,
        n31A: 177.5,
        n32A: 178.5,
        n33A: 179,
        n34A: 179.5
        };
        var notas1S ={
        n1S: 18,
        n2S: 27,
        n3S: 34.5,
        n4S: 36,
        
        n6S: 47,
        n7S: 54.5,
        n8S: 56,
        n9S: 62,
        n10S: 63.5,
        n11S: 65,
       
        n13S: 89,
        n14S: 90.5,
        n15S: 110,
        n16S: 111.5,
        n17S: 117.5,
        
        n19S: 126.5,
        n20S: 128,
        n21S: 143,
        n22S: 144.5,
       
        n24S: 153.5,
        n25S: 162.5,
        n26S: 164,
        
        n28S: 178.5,
        n29S: 179,
        n30S: 179.5
        };
        var notas1D ={
        n1D: 19.5,
        n2D: 21,
        n3D: 37.5,
        n4D: 39,
       
        n6D: 48.5,
        n7D: 50,
        n8D: 51.5,
        n9D: 68,
        n10D: 69.5,
        n11D: 71,
        
        n13D: 80,
        n14D: 83,
        n15D: 92,
        n16D: 102.5,
        n17D: 107,
        
        n19D: 131,
        n20D: 132.5,
        n21D: 140,
        n22D: 141.5,
        
        n24D: 155,
        n25D: 156.5,
        n26D: 165.5,
        n27D: 173,
        
        n29D: 176,
        n30D: 177.5,
        n31D: 178.5,
        n32D: 179,
        n33D: 179.5
        }
        var notas1F ={
        n1F: 22.5,
        n2F: 24,
        n3F: 25.5,
        n4F: 40.5,
        
        n6F: 43.5,
        n7F: 56,
        n8F: 57.5,
        n9F: 72.5,
        n10F: 74,
        
        n12F: 77,
        n13F: 93.5,
        n14F: 95,
        n15F: 104,
        n16F: 105.5,
        
        n18F: 134,
        n19F: 135.5,
        n20F: 137,
        
        n22F: 158,
        n23F: 159.5,
        n24F: 161,
        
        n26F: 177.5,
        n27F: 178.5,
        n28F: 179,
        n29F: 179.5
        };
        var notasTocar1A ={
            nT1A: 15.5,
            nT2A: 17,
            nT3A: 29,
            nT4A: 30.5,
            nT5A: 32,
            nT6A: 33.5,
            nT7A: 53.5,
            
            nT9A: 59.5,
            nT10A: 61,
            nT11A: 67,
            nT12A: 85,
            
            nT14A: 88,
            nT15A: 97,
            nT16A: 98.5,
            nT17A: 100,
            nT18A: 113.5,
            
            nT20A: 116.5,
            nT21A: 121,
            nT22A: 122.5,
            
            nT24A: 130,
            nT25A: 148,
            nT26A: 149.5,
            nT27A: 151,
            nT28A: 167.5,
            
            nT30A: 172,
            nT31A: 178,
            nT32A: 179,
            nT33A: 179.5,
            nT34A: 180
        
        }
        var notasTocar1S ={
            nT1S: 18.5,
            nT2S: 27.5,
            nT3S: 35,
            nT4S: 36.5,
            
            nT6S: 47.5,
            nT7S: 55,
            nT8S: 56.5,
            nT9S: 62.5,
            nT10S: 64,
            nT11S: 65.5,
            
            nT13S: 89.5,
            nT14S: 91,
            nT15S: 110.5,
            nT16S: 112,
            nT17S: 118,
            //
            
            nT19S: 127,
            nT20S: 128.5,
            nT21S: 143.5,
            nT22S: 145,
            
            nT24S: 154,
            nT25S: 163,
            nT26S: 164.5,
            
            nT28S: 179,
            nT29S: 179.5,
            nT30S: 180
        };
        var notasTocar1D ={
            nT1D: 20,
            nT2D: 21.5,
            nT3D: 38,
            nT4D: 39.5,
            
            nT6D: 49,
            nT7D: 50.5,
            nT8D: 52,
            nT9D: 68.5,
            nT10D: 70,
            nT11D: 71.5,
            
            nT13D: 80.5,
            nT14D: 83.5,
            nT15D: 92.5,
            nT16D: 103,
            nT17D: 107.5,
            
            nT19D: 131.5,
            nT20D: 133,
            nT21D: 140.5,
            nT22D: 142,
            
            nT24D: 155.5,
            nT25D: 157,
            nT26D: 166,
            nT27D: 173.5,
            
            nT29D: 176.5,
            nT30D: 178,
            nT31D: 179,
            nT32D: 179.5,
            nT33D: 180
        };
        var notasTocar1F ={
            nT1F: 23,
            nT2F: 24.5,
            nT3F: 26,
            nT4F: 41,
            
            nT6F: 44,
            nT7F: 56.5,
            nT8F: 58,
            nT9F: 73,
            nT10F: 74.5,
            
            nT12F: 77.5,
            nT13F: 94,
            nT14F: 95.5,
            nT15F: 104.5,
            nT16F: 106,
            
            nT18F: 134.5,
            nT19F: 136,
            nT20F: 137.5,
            
            nT22F: 158.5,
            nT23F: 160,
            nT24F: 161.5,
            
            nT26F: 178,
            nT27F: 179,
            nT28F: 179.5,
            nT29F: 180
        
        };
        //Otras notas
        this.notaLA ={
        n8A: 54.5,
        n19A: 114.5,
        n23A: 123.5,
        n13A: 86,
        n29A: 170,
        };
        this.notaLAI ={
            nT8A: 55,
            nT19A: 115,
            nT23A: 124,
            nT13A: 86.5,
            nT29A: 170.5,
        };
        this.notaLSI={
            nT5S: 46,
            nT12S: 82,
            nT18S: 125.5,
            nT23S: 152.5,
            nT27S: 178,
        };
        this.notaLDI={
            nT5D: 45.5,
            nT12D: 79,
            nT18D: 109,
            nT23D: 145.5,
            nT28D: 175,
        };
        this.notaLFI={
            nT5F: 42.5,
            nT11F: 76,
            nT17F: 119.5,
            nT21F: 139,
            nT25F: 169,
        }
        this.notaLAT = {
            nT8A: 55.5,
            nT19A: 115.5,
            nT23A: 124.5,
            nT13A: 87,
            nT29A: 171,
        }
        this.notaLS ={
            n5S: 45.5,
            n12S: 81.5,
            n18S: 125,
            n23S: 152,
            n27S: 177.5,
        };
        this.notaLST ={
            nT5S: 46.5,
            nT12S: 82.5,
            nT18S: 126,
            nT23S: 153,
            nT27S: 178.5,
        }
        this.notaLD ={
            n5D: 45,
            n12D: 78.5,
            n18D: 108.5,
            n23D: 146,
            n28D: 174.5,
        };
        this.notaLDT ={
            nT5D: 46,
            nT12D: 79.5,
            nT18D: 109.5,
            nT23D: 146,
            nT28D: 175.5,
        }
        this.notaLF ={
            n5F: 42,
            n11F: 75.5,
            n17F: 119,
            n21F: 138.5,
            n25F: 168.5,
        };
        this.notaLFT ={
            nT5F: 43,
            nT11F: 76.5,
            nT17F: 120,
            nT21F: 139.5,
            nT25F: 169.5,
        }

    
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
 this.scene.start('felicidades3');
})
this.resume.on('pointerdown', () =>{
    this.boton.play(this.butonconfig);
    this.scene.start('gameover3');
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
    this.tiempooo += 0.1;
    this.tiempo = this.tiempooo.toFixed(1);
    console.log(this.tiempo);
   };
   notalarga(){
    for (const ntLargaA in this.notaLA) {
        if (this.notaLA[ntLargaA] == this.tiempo) {
            var NLAmarilla = this.physics.add.image(235,-100,'AmarillaL');
            NLAmarilla.setVelocity(0,800);
            
        }
    }
    for (const ntLargaS in this.notaLS) {
        if (this.notaLS[ntLargaS] == this.tiempo) {
            var NLAzul = this.physics.add.image(345,-100,'AzulL');
            NLAzul.setVelocity(0,800);
            
        }
    }
    for (const ntLargaD in this.notaLD) {
        if (this.notaLD[ntLargaD] == this.tiempo) {
            var NLMorado = this.physics.add.image(460,-100,'MoradoL');
            NLMorado.setVelocity(0,800);
            
        }
    }
    for (const ntLargaF in this.notaLF) {
        if (this.notaLF[ntLargaF] == this.tiempo) {
            var NLNaranja = this.physics.add.image(570,-100,'NaranjaL');
            NLNaranja.setVelocity(0,800);
            
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
            cirAmarillo.setVelocity(0,800);
        }
    }
    for (const nsS in nts1S) {
        if (nts1S[nsS] == this.tiempo) {
            var cirAzul = this.physics.add.image(345, 30, 'Cazul');
            cirAzul.setVelocity(0,800);
        }
    }
    for (const nsD in nts1D) {
        if (nts1D[nsD] == this.tiempo) {
            var cirMorado = this.physics.add.image(460, 30, 'Cmorado');
            cirMorado.setVelocity(0,800);
        }
    }
    for (const nsF in nts1F) {
        if (nts1F[nsF] == this.tiempo) {
            var cirNaranja = this.physics.add.image(570, 30, 'Cnaranja');
            cirNaranja.setVelocity(0,800);
        }
    }
    }
    fin(){
        if(this.mistake == 5){
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
            this.tiempooo = -200;
            this.mistake ++;
            
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
    
