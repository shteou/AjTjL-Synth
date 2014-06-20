define('synth/instruments',
  ['synth/utility'],
  function(Utility) {
    var _currentInstrument,
    _instruments = ["piano", "guitar", "drum", "saxaphone"];

    function onInstrumentClick(i) {
      var buttonId = 'instrument-' + i + '-button';

      // If no tile type is active, it's a regular note
      if(Utility.isActiveButton(buttonId)) {
        clearInstrument();
      } else {
        _currentInstrument = i;
        Utility.highlightActiveButton('instrument-button', buttonId);
      }
    }

    function clearInstrument() {
        if(_currentInstrument && _currentInstrument !== '') {
          Utility.clearActiveButton('instrument-' + _currentInstrument + '-button');
          _currentInstrument = null;          
        }
      }

    return {
      init: function() {
      	/* Initialise handlers for instruments */
        _instruments.forEach(function(i) {
          $('#instrument-' + i + '-button').on('click', onInstrumentClick.bind(this, i));
        });
      },

      clearInstrument: clearInstrument,
      getInstrument: function() {
        return _currentInstrument;
      }
    }
})
