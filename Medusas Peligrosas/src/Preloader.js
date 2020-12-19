Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite(150, 180, 'preloaderBg');
		this.preloadBar = this.add.sprite(150, 180, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

	
		this.load.image('title', 'img/titulo.png');
		this.load.image('screen-bg', 'img/screen-bg.png');
		this.load.image('screen-mainmenu', 'img/fondo.jpg');
		this.load.image('screen-befplay', 'img/befplay.jpg');
		this.load.image('screen-inst', 'img/screen-ins.png');
		this.load.image('screen-records', 'img/fondoRec2.png');
		this.load.image('letrero-befplay', 'img/letrero.png');
		this.load.image('img-mainmenu', 'img/bp.png');
		this.load.image('medu-mainmenu', 'img/medusa.png');
		this.load.image('salirfondo', 'img/salir.png');
		this.load.image('olvidaste', 'img/olvidaste.png');
		

		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/Bjugar.png', 280, 107);
		this.load.spritesheet('button-rec', 'img/Brecord.png', 280, 107);
		this.load.spritesheet('button-inst', 'img/Binst.png', 280, 107);
		this.load.spritesheet('button-salir', 'img/Bsalir.png', 280, 107);
		this.load.spritesheet('bob-befplay', 'img/Belegir.png', 300, 371);
		this.load.spritesheet('pat-befplay', 'img/Pelegir.png', 325, 441);
		this.load.spritesheet('volver', 'img/volver.png', 100, 100);
		this.load.spritesheet('elim', 'img/eliminar.png', 100, 100);

		

		this.load.audio('audio-boton', ['audio/boton.ogg']);
		this.load.audio('audio-tecla', ['audio/tecla.ogg']);
		this.load.audio('audio-menu', ['audio/Menu_sound.mp3']);
	},
	create: function() {
		var music = this.sound.add('audio-menu');
        music.play();
		this.game.state.start('MainMenu');
	}
};