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
        for(var i=0; i<_gridWidth; ++i) {
          _grid.push([]);
          for(var j=0; j<_gridHeight; ++j) {
            _grid[i].push({
              type: "empty",
              note: null
            });
          }
        }
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
        console.log("Waaat");

        for(var x=0; x<_gridWidth/10; ++x) {
          for(var y=0; y<_gridHeight/10; ++y) {
            goo.ctx.save();
            goo.ctx.rect(x*10, y*10, 10, 10);
            var tile = getTile(x, y);

            if(tile.type !== 'empty') {
              goo.ctx.fillStyle = "red";
              goo.ctx.fillRect(x*10, y*10, 10, 10);
            } else {
              goo.ctx.strokeStyle = "blue";
              goo.ctx.stroke();
            }
            goo.ctx.restore();
          }
        }
      }
    }
})
