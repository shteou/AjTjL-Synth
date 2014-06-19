define('synth/grid',
  ['synth/tiles'],
  function(Tile) {
    var _grid = [],
        _gridLength = 100;

    return {
      init: function() {
        for(var i=0; i<_gridLength; ++i) {
          _grid.push([]);
          for(var j=0; j<_gridLength; ++j) {
            _grid[i].push(new Tile.Empty());
          }
        }
      }
    }
})
