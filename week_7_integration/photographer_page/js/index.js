$(document).ready(function() {
	var background = $('.lightbox-background');
	var lightbox = $('.lightbox');
	var images = $('.gallery-image');
	var lightboxExit = $('.lightbox-exit');
	var lightboxImage = $('.lightbox-image');
	var lightboxCaption = $('.lightbox-caption');

	function showLightBox() {
		var imageContainer = $(this);
		var image = imageContainer.find('img');
		var caption = imageContainer.find('gallery-image-caption');


		background.removeClass('hidden');
		lightbox.removeClass('hidden');

		lightboxImage.attr('src', image.attr('src'));
		lightboxCaption.html(caption.html());

		lightbox.css('margin-left', -1 * lightbox.width() / 2);
		lightbox.css('margin-top', -1 * lightbox.height() / 2);

	}

	images.on('click', showLightBox);

	function hideLightBox() {
		background.addClass('hidden');
		lightbox.addClass('hidden');
	}

	lightboxExit.on('click', hideLightBox);
	background.on('click', hideLightBox);


}); 

