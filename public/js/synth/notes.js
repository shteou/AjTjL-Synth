define('synth/notes',
  ['synth/utility'],
  function(Utility) {
  	var _currentNote,
        _notes = ["A", "As", "B", "Bs", "C", "Cs", "D", "Ds", "E", "Es", "F", "Fs", "G", "Gs"];

    function onNoteClick(note) {
      _currentNote = note;
      Utility.highlightActiveButton('note-button', 'note-' + note + '-button');
    }

    return {
      init: function() {
        /* Initialise handlers for notes */
        _notes.forEach(function(n) {
          $('#note-' + n + '-button').on('click', onNoteClick.bind(this, n));
        });

        onNoteClick(_notes[4]);
      },

      getNote: function() {
      	return _currentNote;
      }
    }
})
