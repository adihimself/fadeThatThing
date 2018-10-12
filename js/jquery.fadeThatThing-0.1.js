$(function() {
	$.fn.fadeThatThing = function (options) {

		// default options
        var options = $.extend({
            delay: 0,
            speed: 300
        }, options);

		var ftt_element = this;
		var elements = generateElementsObject(ftt_element);

		fadeElements(elements,options.delay);
		$(window).on('scroll', function(event) {
			fadeElements(elements,options.delay);
		});

		function fadeElements(elements,delay) {
			$.each(elements, function(index, val) {
				if ($(window).scrollTop()+$(window).height() >= val.offset) {
					$(val.element).delay(delay).animate({
						opacity: 1,
						top: 0
					}, options.speed);
				}
			});
		}

		function generateElementsObject (element) {
			var elementObject = [];
			var offsetHeadline = 200;
			$(element).each(function(index, el) {
				elementObject[index] = {
					element: $(this),
					offset: ($(this).offset().top)+offsetHeadline
				}
				$(this).css('opacity', 0);
				$(this).css({
					'opacity': 0,
					'top': '40px',
					'position': 'relative'
				});
			});
			
			return elementObject;
		}
	};
});