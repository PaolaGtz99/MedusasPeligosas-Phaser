Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
	create: function() {
		this.sonidoboton = this.game.add.audio('audio-boton');
		this.buttonContinue = this.add.button(0, 0, 'screen-inst');
		this.fontBig = { font: "20px KrabbyPatty", fill: "#e4beef" };
		this.instrucc = this.add.text(485, 12, "Santos percebes… \n ¡Las medusas estan sueltas!\n Ayuda a Bob Esponja y a \nsus amigos a atraparlas.\n Asegurate de hacer \nun circulo en el suelo para \nalejar a los osos marinos\n y de tener los calzoncillos\n contra rinocerontes, porque\n esas criaturas acechan la zona.", this.fontBig);

		this.volver = this.add.button(50, 10, 'volver', this.startGame, this, 2, 0, 1);

		this.volver.anchor.set(0.5,0);
		this.volver.input.useHandCursor = true;
	},
	startGame: function() {
		this.sonidoboton.play();
		this.game.state.start('MainMenu');
	}
};