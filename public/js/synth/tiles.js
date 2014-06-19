define('synth/tiles',
  ['synth/utility'],
  function(Utility) {
    var _currentTileType = 'regular',
        _tileTypes = ["up", "down", "left", "right", "erase", "wait"];

    function onTileTypeClick(tileType) {
      var buttonId = 'tile-type-' + tileType + '-button';

      // If no tile type is active, it's a regular note
      if(Utility.isActiveButton(buttonId)) {
        _currentTileType = 'regular';
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
      },

      getTileType: function() {
        return _currentTileType;
      }
    }
})
