define('synth/notes',
  ['synth/utility'],
  function(Utility) {
  	var _currentNote = "";

    return {
      getNote: function() {
      	return _currentNote;
      },

      onNoteClick: function(note) {
      	_currentNote = note;
      	Utility.highlightActiveButton('note-button', 'note-' + note + '-button');
      }
    }
})
