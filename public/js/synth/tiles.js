define('synth/tiles',
  ['synth/utility'],
  function(Utility) {
    var _currentTileType = '';

    return {
      onTileTypeClick: function(tileType) {
        _currentTileType = tileType;
        Utility.highlightActiveButton('tile-type-button', 'tile-type-' + tileType + '-button'); 
      },

      Empty: function() {
      },

      Directional: function() {

      },

      Wait: function() {

      }
    }
})
