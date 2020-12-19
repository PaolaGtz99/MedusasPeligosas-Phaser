Ball.salir = function(game) {
};
Ball.salir.prototype = {
	create: function() {
		this.buttonContinue = this.add.button(0, 0, 'salirfondo');
	},
};