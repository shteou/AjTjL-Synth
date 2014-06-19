require.config({
  baseUrl: 'js',
  paths: {
    'synth': 'synth'
  }
});

require(['synth/synth'],
  function(Synth) {

    /* Initialise the grid and other junk */
    Synth.init();

    /* Initialise handlers for pause/play */

    /* Initialise handlers for file operations */
    // var fileOperations = ["New", "Save", "Open", "Clear"];

    // fileOperations.forEach(function(f) {
    //   $('#file-' + f + '-button').on('click', onFileClick.bind(this, f));
    // });
});
