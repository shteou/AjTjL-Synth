define('synth/grid',
  ['synth/tiles'],
  function(Tile) {
    var _grid = [],
        _width = 800,
        _height = 600,
        _gridWidth = _width / 10,
        _gridHeight = _height / 10;

      function getTile(x, y) {
        return _grid[x][y];
      }

      function setTile(x, y, tile) {
        _grid[x][y] = tile;
      }

    return {
      init: function() {
        for(var i=0; i<_gridHeight; ++i) {
          _grid.push([]);
          for(var j=0; j<_gridWidth; ++j) {
            _grid[i].push({
              type: "empty",
              note: null
            });
          }
        }
      },

      getTileByPosition: function(x, y) {
        return getTile(Math.floor(x / 10), Math.floor(y / 10));
      },

      setTileByPosition: function(x, y, tile) {
        setTile(Math.floor(x / 10), Math.floor(y / 10), tile);
      }
    }
})
