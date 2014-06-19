define('synth/instruments',
  ['synth/utility'],
  function(Utility) {
  	var _currentInstrument,
  		_instruments = ["piano", "guitar", "drum", "saxaphone"];

  	function onInstrumentClick(i) {
  	  _currentInstrument = i;
      Utility.highlightActiveButton('instrument-button', 'instrument-' + i + '-button');
  	}

    return {
      init: function() {
      	/* Initialise handlers for instruments */
        _instruments.forEach(function(i) {
          $('#instrument-' + i + '-button').on('click', onInstrumentClick.bind(this, i));
        });

        onInstrumentClick(_instruments[0]);
      }
    }
})
