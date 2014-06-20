define('synth/utility',
  [],
  function() {
    return {
      clearActiveButton: function(buttonId) {
      	$('#' + buttonId).removeClass('button-active');
      },

      isActiveButton: function(buttonId) {
      	return $('#' + buttonId).hasClass('button-active');
      },

      highlightActiveButton: function(buttonClass, buttonId) {
        $('.' + buttonClass).removeClass('button-active');

      	$('#' + buttonId).addClass('button-active');
      },

      renderToCanvas: function (width, height, renderFunction) {
        var buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        renderFunction(buffer.getContext('2d'));
        return buffer;
      }
    }
})
