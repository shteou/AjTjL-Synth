define('synth/grid',
  ['synth/tiles', 'synth/utility'],
  function(Tile, Utility) {
    var _grid = [],
        _width = 800,
        _height = 600,
        _gridWidth = _width / 10,
        _gridHeight = _height / 10,
        _cachedImage;

    function getTile(x, y) {
      return _grid[x][y];
    }

    function setTile(x, y, tile) {
      _grid[x][y] = tile;
      var ctx = _cachedImage.getContext('2d')
      ctx.rect(x*10, y*10, 10, 10);
      ctx.fillStyle = "red";
      ctx.fillRect(x*10, y*10, 10, 10);
    }

    function render(ctx) {
      for(var x=0; x<_gridWidth; ++x) {
        for(var y=0; y<_gridHeight; ++y) {
          ctx.rect(x*10, y*10, 10, 10);
          var tile = getTile(x, y);

          if(tile.type !== 'empty') {
            ctx.fillStyle = "red";
            ctx.fillRect(x*10, y*10, 10, 10);
          } else {
            ctx.strokeStyle = "blue";
            ctx.stroke();
          }
        }
      }
    }

    return {
      init: function() {
        debugger;
        for(var i=0; i<_gridWidth; ++i) {
          _grid.push([]);
          for(var j=0; j<_gridHeight; ++j) {
            _grid[i].push({
              type: "empty",
              note: null
            });
          }
        }
        _cachedImage = Utility.renderToCanvas(800, 600, render);
      },

      getTileByPosition: function(x, y) {
        // TODO: Fix me, boundary case
        return getTile(Math.floor(x / 10), Math.floor(y / 10));
      },

      setTileByPosition: function(x, y, tile) {
        // TODO: Fix me, boundary case
        setTile(Math.floor(x / 10), Math.floor(y / 10), tile);
      },

      update: function(goo, time) {
        goo.ctx.drawImage(_cachedImage, 0, 0);
      }
    }
})
