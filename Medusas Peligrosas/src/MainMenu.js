Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {

		this.sonidoboton = this.game.add.audio('audio-boton');
		this.add.sprite(0, 0, 'screen-mainmenu');
		this.gameTitle = this.add.sprite(200, 0, 'title');
		this.gameTitle.anchor.set(0.5,0);
		this.gameImg = this.add.sprite(250, 200, 'img-mainmenu');
		this.gameImg.anchor.set(0.5,0);
		this.gameMed = this.add.sprite(380, 70, 'medu-mainmenu');
		this.gameMed.anchor.set(0.5,0);
		
		


		this.startButton = this.add.button(600, 70, 'button-start', this.startGame, this, 2, 0, 1);
		this.recButton = this.add.button(600, 190, 'button-rec', this.records, this, 2, 0, 1);
		this.instButton = this.add.button(600, 310, 'button-inst', this.instrucciones, this, 2, 0, 1);
		this.salirButton = this.add.button(600, 430, 'button-salir', this.salir, this, 2, 0, 1);

		this.startButton.anchor.set(0.5,0);
		this.recButton.anchor.set(0.5,0);
		this.instButton.anchor.set(0.5,0);
		this.salirButton.anchor.set(0.5,0);

		this.startButton.input.useHandCursor = true;
		this.recButton.input.useHandCursor = true;
		this.instButton.input.useHandCursor = true;
		this.salirButton.input.useHandCursor = true;




		// button to "read the article"
	},
	startGame: function() {
		this.sonidoboton.play();
		this.game.state.start('befplay');
	},
	instrucciones: function() {
		this.sonidoboton.play();
		this.game.state.start('Howto');
		
	},
	salir: function() {
		this.sonidoboton.play();
		this.game.state.start('salir');
		
	},
	records: function() {
		this.sonidoboton.play();
		this.game.state.start('records');
	}
};