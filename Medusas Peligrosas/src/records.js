Ball.records = function(game) {
};
Ball.records.prototype = {
	
	create: function() {
		this.sonidoboton = this.game.add.audio('audio-boton');
		this.buttonContinue = this.add.button(0, 0, 'screen-records');
		this.fontBig = { font: "30px KrabbyPatty", fill: "black" };
		
		this.volver = this.add.button(60, 10, 'volver', this.volvermenu, this, 2, 0, 1);

		this.volver.anchor.set(0.5,0);
		this.volver.input.useHandCursor = true;

		this.primeros();
	},
	volvermenu: function() {
		this.sonidoboton.play();
		this.game.state.start('MainMenu');
	},
	primeros: function(){

		var records = localStorage.getItem("records"); 
        var records = JSON.parse(records); 
		if(records==null) records= [];
		
		//ordena

		var data= [];
          records.forEach(record=>{
            data.push(JSON.parse(record));
          });
          records = data;
        records.sort(function (a, b){
    return (b.puntos - a.puntos)
});
this.rec1 = this.add.text(220, 240, JSON.stringify(records[0].nombre)+". . . . . .  "+JSON.stringify(records[0].puntos+ "pts"), this.fontBig);
this.rec2 = this.add.text(220, 300, JSON.stringify(records[1].nombre)+". . . . . .  "+JSON.stringify(records[1].puntos+ "pts"), this.fontBig);
this.rec3 = this.add.text(220, 360, JSON.stringify(records[2].nombre)+". . . . . .  "+JSON.stringify(records[2].puntos+ "pts"), this.fontBig);
this.rec4 = this.add.text(220, 420, JSON.stringify(records[3].nombre)+". . . . . .  "+JSON.stringify(records[3].puntos+ "pts"), this.fontBig);
	}
	
};