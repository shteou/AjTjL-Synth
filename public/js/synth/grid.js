define('synth/grid',
  ['synth/tiles', 'synth/utility', 'synth/notes'],
  function(Tile, Utility, Notes) {
    var _grid = [],
        _tileSize = 12,
        _width = 840,
        _height = 600,
        _gridWidth = _width / _tileSize,
        _gridHeight = _height / _tileSize,
        _cachedImage;

    function getTile(x, y) {
      return _grid[x][y];
    }

    function setTile(x, y, tile) {
      _grid[x][y] = tile;

      var ctx = _cachedImage.getContext('2d')
      if(tile.type !== 'empty') {
        ctx.fillStyle = $('#note-' + Notes.getNote() + '-button').css('background-color');
        ctx.fillRect(x*_tileSize, y*_tileSize, _tileSize, _tileSize);
      }
      ctx.rect(x*_tileSize, y*_tileSize, _tileSize, _tileSize);
      ctx.stroke();
    }

    function render(ctx) {
      for(var x=0; x<_gridWidth; ++x) {
        ctx.beginPath();
        ctx.moveTo(x*_tileSize, 0);
        ctx.lineTo(x*_tileSize, _height);
        ctx.stroke();
      }

      for(var y=0; y<_gridWidth; ++y) {
        ctx.beginPath();
        ctx.moveTo(0, y*_tileSize);
        ctx.lineTo(_width, y*_tileSize);
        ctx.stroke();
      }
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
        // TODO: Render image as rows, callback when done
        _cachedImage = Utility.renderToCanvas(_width, _height, render);
      },

      getTileSize: function() {
        return _tileSize;
      },

      getTileByPosition: function(x, y) {
        // TODO: Fix me, boundary case
        return getTile(Math.floor(x / _tileSize), Math.floor(y / _tileSize));
      },

      setTileByPosition: function(x, y, tile) {
        // TODO: Fix me, boundary case
        setTile(Math.floor(x / _tileSize), Math.floor(y / _tileSize), tile);
      },

      update: function(goo, time) {
        goo.ctx.drawImage(_cachedImage, 0, 0);
      }
    }
})
