define('synth/synth',
  ['synth/utility', 'synth/grid', 'synth/instruments', 'synth/tiles', 'synth/notes'],
  function(Utility, Grid, Instruments, Tiles, Notes) {
    var _goo,
        _tempo = 120,
        _playing = false,
        _playTimer;

    function play() {
      if(!_playing) {
        _playTimer = setInterval(Instruments.advance, (60/_tempo)*1000);
      }
    }

    function stop() {
      clearInterval(_playTimer);
      _playTimer = null;
      Instruments.resetInstruments();
    }

    function onMouse(goo) {
      if(Instruments.getCurrentInstrument() && Instruments.getCurrentInstrument() !== '') {
        var x = Math.floor(goo.mouseX / Grid.getTileSize()),
            y = Math.floor(goo.mouseY / Grid.getTileSize());

        Instruments.setInstrumentLocation(x, y);
        Instruments.setInstrumentStartLocation(x, y);
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
        $('#file-stop-button').on('click', stop);

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
