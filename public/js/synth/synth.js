define('synth/synth',
  ['synth/utility', 'synth/grid', 'synth/instruments', 'synth/tiles', 'synth/notes'],
  function(Utility, Grid, Instruments, Tiles, Notes) {
    var _goo,
        _tempo = 120;

    function play() {
      setInterval(Instruments.advance, (60/_tempo)*1000);
    }

    function onMouse(goo) {
      if(Instruments.getCurrentInstrument() && Instruments.getCurrentInstrument() !== '') {
        Instruments.setInstrumentLocation(Math.floor(goo.mouseX / Grid.getTileSize()),
          Math.floor(goo.mouseY / Grid.getTileSize()));
        Instruments.clearCurrentInstrument();
     } else {
      var tile = {
        note: Notes.getNote(),
      	tileType: Tiles.getTileType() === 'erase' ? 'empty' : Tiles.getTileType()
       };

       Grid.setTileByPosition(goo.mouseX, goo.mouseY, tile);
     }
   }


    return {
      init: function() {
      	Grid.init();
      	Instruments.init();
      	Tiles.init();
      	Notes.init();

        $('#file-play-button').on('click', play);

      	_goo = new Goo({
      	  width: 840,
      	  height: 600,
      	  container: $('#goo-container')[0],
      	  onDraw: function(goo, time) {            
      	  	// Render the grid
            goo.ctx.clearRect(0, 0, goo.width, goo.height);
            Grid.update(goo, time);
            Instruments.render(goo, time);

      	  	// Update + Render the instruments
      	  },
      	  onMouseDrag: onMouse,
          onMouseDown: onMouse
      	});
      }
    }
});
