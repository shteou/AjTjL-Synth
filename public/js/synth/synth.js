define('synth/synth',
  ['synth/utility', 'synth/grid', 'synth/instruments', 'synth/tiles', 'synth/notes'],
  function(Utility, Grid, Instruments, Tiles, Notes) {
    var _goo;

    return {
      init: function() {
      	Grid.init();
      	Instruments.init();
      	Tiles.init();
      	Notes.init();

      	_goo = new Goo({
      	  width: 840,
      	  height: 600,
      	  container: $('#goo-container')[0],
      	  onDraw: function(goo, time) {            
      	  	// Render the grid
            goo.ctx.clearRect(0, 0, goo.width, goo.height);
            Grid.update(goo, time);

      	  	// Update + Render the instruments
      	  },
      	  onMouseUp: function(goo) {
      	    if(Instruments.getInstrument() && Instruments.getInstrument() !== '') {
      	      Instruments.clearInstrument();
      	    } else {
      	      var note = Notes.getNote(),
      	          tileType = Tiles.getTileType(),
                  tile = {
      	            note: Notes.getNote(),
      	            tileType: Tiles.getTileType()
      	  		};

	      	  	Grid.setTileByPosition(goo.mouseX, goo.mouseY, tile);
      	  	}
      	  }
      	});
      }
    }
});
