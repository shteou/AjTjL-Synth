define('synth/utility',
  [],
  function() {
    return {
      highlightActiveButton: function(buttonClass, buttonId) {
        $('.' + buttonClass).removeClass('button-highlighted');

      	$('#' + buttonId).addClass('button-highlighted');
      }
    }
})
