define('synth/synth',
  ['synth/utility', 'synth/instruments', 'synth/tiles', 'synth/notes'],
  function(Utility, Instruments, Tiles, Notes) {
    return {
      init: function() {
      	Instruments.init();
      	Tiles.init();
      	Notes.init();
      }
    }
})
