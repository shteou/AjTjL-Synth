define('synth/tiles',
  ['synth/utility'],
  function(Utility) {
    var _currentTileType,
        _tileTypes = ["up", "down", "left", "right", "erase", "wait"];

    function onTileTypeClick(tileType) {
      var buttonId = 'tile-type-' + tileType + '-button';

      // If no tile type is active, it's a regular note
      if(Utility.isActiveButton(buttonId)) {
        _currentTileType = '';
        Utility.clearActiveButton(buttonId);
      } else {
        _currentTileType = tileType;
        Utility.highlightActiveButton('tile-type-button', buttonId);
      }
    }

    return {
      init: function() {
        /* Initialise handlers for direction modifiers */
        _tileTypes.forEach(function(t) {
          $('#tile-type-' + t + '-button').on('click', onTileTypeClick.bind(this, t));
        });
      }
    }
})
