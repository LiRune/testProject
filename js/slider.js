$(document).ready(function() {
	var $body = $('body');
	
	jssor_slider1_starter = function (containerId) {
	    var options = { $AutoPlay: true };
	    var jssor_slider1 = new $JssorSlider$(containerId, options);
	};
	
	$('.article-images').click(function() {
		$body.append('<div id="back-slider"><img id="back-close" src="images/close.png"></div>');
		var $backSlider = $('#back-slider');
		var $backClose = $('#back-close');
		$backSlider.css({
			'width': '100%',
			'height': '100%',
			'background-color': '#000',
			'opacity': '0.95',
			'position': 'fixed',
			'top': '0',
			'left': '0'
		});
		
		$backClose.css({
			'float': 'right',
			'margin': '1em',
			'cursor': 'pointer'
		});
		
		$.ajax({
			type: 'POST',
			url: 'slider.html',
			success: function(response) {
				$body.append(response);
				jssor_slider1_starter('slider1_container');
				
				$backClose.click(function() {
					$('#slider1_container').remove();
					$backSlider.remove();
				});
			}
		});
	});
});
