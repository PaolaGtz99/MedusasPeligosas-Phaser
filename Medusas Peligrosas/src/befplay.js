Ball.befplay = function(game) {
};
Ball.befplay.prototype = {
	
	create: function() {

		this.sonidotecla = this.game.add.audio('audio-tecla');
		this.sonidoboton = this.game.add.audio('audio-boton');
		this.add.sprite(0, 0, 'screen-befplay');
		this.letre = this.add.sprite(370, 400, 'letrero-befplay');
		this.letre.anchor.set(0.5,0);
		this.fontBig = { font: "30px KrabbyPatty", fill: "#e4beef" };
		this.nomFont = { font: "50px KrabbyPatty", fill: "#e4beef" };

		this.bobButton = this.add.button(200, 220, 'bob-befplay', this.bob, this, 1, 0, 1);
		this.bobButton.anchor.set(0.5,0);
		this.patButton = this.add.button(580, 140, 'pat-befplay', this.patricio, this, 1, 0, 1);
		this.patButton.anchor.set(0.5,0);
		this.elim = this.add.button(450, 30, 'elim', this.del, this, 2, 0, 1);
		this.elim.anchor.set(0.5,0);
		this.volver = this.add.button(750, 10, 'volver', this.volvermenu, this, 2, 0, 1);

		this.volver.anchor.set(0.5,0);
		this.volver.input.useHandCursor = true;

		this.elim.input.useHandCursor = true;
		this.bobButton.input.useHandCursor = true;
		this.patButton.input.useHandCursor = true;

		//this.add.text(10, 10, 'Enter your name:', { font: '32px KrabbyPatty', fill: '#ffffff' });
		

		this.keys = this.game.input.keyboard.createCursorKeys();
		
		this.k = this.game.input.keyboard;
		
		this.jugnom = "N O M B R E";
		this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: 'black' });
		
	},

	patricio: function(){
		this.sonidoboton.play();
		this.personaje = 1;
		this.startGame();
	},
	bob: function(){
		this.sonidoboton.play();
		this.personaje = 0;
		this.startGame();
	},

	volvermenu: function(){
		this.sonidoboton.play();
		this.game.state.start('MainMenu');
	},
	startGame: function() {
		this.sonidoboton.play();

		if(this.jugnom == "N O M B R E"){
			this.add.sprite(250, 140, 'olvidaste');
		}else{
			
			window.open("Game.html?pj="+this.personaje+ "&nb="+this.jugnom, "_self");
		}
		
	},

	del: function(){
		this.sonidoboton.play();
		this.jugnom = "N O M B R E";
		this.nombre.destroy();
		this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: 'black' });
			
	},
	
	update: function(){

		

		if(this.k.isDown(65)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "A "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "A ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(66)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "B "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "B ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(67)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "C "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "C ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(68)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "D "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "D ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(69)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "E "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "E ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(70)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "F "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "F ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(71)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "G "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "G ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(72)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "H "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "H ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(73)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "I "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "I ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(74)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "J "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "J ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(75)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "K "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "K ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(76)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "L "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "L ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(77)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "M "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "M ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(78)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "N "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "N ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(79)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "O "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "O ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(80)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "P "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "P ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(81)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "Q "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "Q ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(82)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "R "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "R ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(83)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "S "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "S ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(84)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "T "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "T ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(85)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "U "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "U ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(86)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "V "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "V ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}


		if(this.k.isDown(87)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "X "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "X ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(88)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "Y "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "Y ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		if(this.k.isDown(89)){
			this.sonidotecla.play();
			if(this.jugnom == "N O M B R E"){ this.jugnom = "Z "}
			else if (this.jugnom.length > 11){}
			else{this.jugnom = this.jugnom + "Z ";}
			this.nombre.destroy();
			this.nombre = this.add.text(130, 100, this.jugnom , { font: '50px KrabbyPatty', fill: '#ffff00' });
			this.sleep(700);	
		}

		

		
		

	
	},

	sleep : function(milliseconds) {
		
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
		 if ((new Date().getTime() - start) > milliseconds) {
		  break;
		 }
		}
	   }
};