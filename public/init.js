require.config({
  baseUrl: 'js',
  paths: {
    'synth': 'synth'
  }
});

require(['synth/grid', 'synth/instruments', 'synth/tiles', 'synth/notes'],
  function(Grid, Instruments, Tiles, Notes) {

    /* Initialise the grid and other junk */
    Grid.init();

    async.parallel([
      function(done) {
        done();
      },
    ], bindButtons);

    function bindButtons(err, results) {
      if(err) {
        throw new Error(err);
      }

      /* Initialise handlers for notes */
      var notes = ["A", "As", "B", "Bs", "C", "Cs", "D", "Ds", "E", "Es", "F", "Fs", "G", "Gs"];

      notes.forEach(function(n) {
        $('#note-' + n + '-button').on('click', Notes.onNoteClick.bind(this, n));
      });

      // /* Initialise handlers for instruments */
      // var instruments = ["Piano", "Guitar", "Drum", "Saxaphone"];

      // instruments.forEach(function(i) {
      //   $('#instrument-' + i + '-button').on('click', onInstrumentClick.bind(this, n));
      // });

      /* Initialise handlers for direction modifiers */
      var tileTypes = ["up", "down", "left", "right", "erase", "wait"];

      tileTypes.forEach(function(t) {
        $('#tile-type-' + t + '-button').on('click', Tiles.onTileTypeClick.bind(this, t));
      });

      // /* Initialise handlers for file operations */
      // var fileOperations = ["New", "Save", "Open", "Clear"];

      // fileOperations.forEach(function(f) {
      //   $('#file-' + f + '-button').on('click', onFileClick.bind(this, f));
      // });
    }
});
