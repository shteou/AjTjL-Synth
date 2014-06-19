require.config({
  baseUrl: 'js',
  paths: {
    'synth': 'synth'
  }
});

require(['synth/grid', 'synth/toons', 'synth/instruments', 'synth/tiles'],
  function(Grid, Toons, Instruments, Tiles) {

    /* Initialise the grid, toons, instruments and tiles */
    async.parallel([
      function(done) {
        Grid.init(done);
      }
    ], bindButtons);

    function bindButtons(err, results) {
      if(err) {
        throw new Error(err);
      }

      /* Initialise handlers for notes */
      var notes = ["A", "As", "B", "Bs", "C", "Cs", "D", "Ds", "E", "Es", "F", "Fs"];

      notes.forEach(function(n) {
        $('note-' + n + '-button').on('click', onNoteClick.bind(this, n));
      });

      /* Initialise handlers for instruments */
      var instruments = ["Piano", "Guitar", "Drum", "Saxaphone"];

      instruments.forEach(function(i) {
        $('instrument-' + i + '-button').on('click', onInstrumentClick.bind(this, n));
      });

      /* Initialise handlers for direction modifiers */
      var tileTypes = ["Up", "Down", "Left", "Right", "Erase", "Wait"];

      tileTypes.forEach(function(t) {
        $('tile-type-' + t + '-button').on('click', onTileTypeClick.bind(this, t));
      });

      /* Initialise handlers for file operations */
      var fileOperations = ["New", "Save", "Open", "Clear"];

      fileOperations.forEach(function(f) {
        $('file-' + f + '-button').on('click', onFileClick.bind(this, f));
      });
    }
});
