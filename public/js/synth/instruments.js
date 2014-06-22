define('synth/instruments',
  ['synth/utility', 'synth/notes', 'synth/grid'],
  function(Utility, Notes, Grid) {
    var _currentInstrument,
        _instruments;

    function createInstrument(name) {
      var image = new Image();
      image.src = "assets/instruments/" + name + ".png";
      var sounds = [];

      Notes.getNotes().forEach(function(n) {
        if(["Ab", "A", "Bb", "B"].indexOf(n) > -1) {
          sounds.push(AudioFX('assets/midi-js-soundfonts/' + name + '/' + n + '4.mp3')); 
        } else {
          sounds.push(AudioFX('assets/midi-js-soundfonts/' + name + '/' + n + '5.mp3')); 
        }
      })

      return {
        x: -1,
        y: -1,
        image: image,
        direction: "right",
        sounds: sounds
      };
    }

    function onInstrumentClick(i) {
      var buttonId = 'instrument-' + i + '-button';

      // If no tile type is active, it's a regular note
      if(Utility.isActiveButton(buttonId)) {
        clearCurrentInstrument();
      } else {
        _currentInstrument = i;
        Utility.highlightActiveButton('instrument-button', buttonId);
      }
    }

    function clearCurrentInstrument() {
        if(_currentInstrument && _currentInstrument !== '') {
          Utility.clearActiveButton('instrument-' + _currentInstrument + '-button');
          _currentInstrument = null;          
        }
      }

    return {
      init: function() {
        _instruments = {
          piano: createInstrument("piano"),
          // guitar: createInstrument("guitar"),
          drum: createInstrument("drum")
          // saxaphone: createInstrument("saxaphone")
        };
      	
        /* Initialise handlers for instruments */
        for(var k in _instruments) {
          $('#instrument-' + k + '-button').on('click', onInstrumentClick.bind(this, k));
        };
      },

      advance: function() {
        for(var k in _instruments) {
          var instrument = _instruments[k],
              d = instrument.direction,
              up = 0,
              right = 0;

          if(instrument.x === -1) {
            continue;
          }

          if(d === "up") {
            up = 1;
          } else if (d === 'down') {
            up = -1;
          } else if (d === 'right') {
            right = 1;
          } else {
            right = -1;
          }

          instrument.x += right;
          instrument.y += up;

          var tile = Grid.getTile(instrument.x, instrument.y);
          if(tile.note && tile.note !== '') {
            var soundIndex = Notes.getNotes().indexOf(tile.note);
            instrument.sounds[soundIndex].play();
            instrument.sounds[soundIndex].stop();
            instrument.sounds[soundIndex].play();
          }

          // Update directions
          if(["up", "down", "left", "right"].indexOf(tile.tileType) > -1) {
            instrument.direction = tile.tileType;
          }
        }
      },

      clearCurrentInstrument: clearCurrentInstrument,

      getCurrentInstrument: function() {
        return _currentInstrument;
      },

      setInstrumentLocation: function(x, y) {
        _instruments[_currentInstrument].x = x;
        _instruments[_currentInstrument].y = y;
      },

      render: function(goo, time) {
        for(var k in _instruments) {
          var i = _instruments[k];
          if(i.x !== -1) {
            goo.ctx.drawImage(i.image, i.x * 12, i.y * 12);              
          }
        }
      }
    }
})
