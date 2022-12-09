function lightboxOpen(event, obj) {
	event.preventDefault();
	event.stopImmediatePropagation();

	// Check if a lightbox is already open
	var lightbox = document.getElementById("lightbox");
	if (lightbox) {
		lightbox.remove();
	}

	// Get attributes
	var imageUrl = obj.getAttribute("href");
	var imageTitle = obj.dataset.title;

	// Generate the HTML lightbox code
	var lightboxHTML = '<div id="lightbox"><div class="lightbox-background" onclick="lightboxClose(event)"><div class="lightbox-content">';
	lightboxHTML += '<a href="" onclick="lightboxClose(event)" class="lightbox-close"><i class="far fa-times-circle"></i></a>';
	lightboxHTML += '<img src="' + imageUrl + '" class="lightbox-image" />';
	lightboxHTML += '<div class="lightbox-title"><p>';
	if (imageTitle) {
		lightboxHTML += imageTitle;
	}
	lightboxHTML += '</p></div>';
	lightboxHTML += '</div></div></div>';

	// Add the code to the DOM
	document.body.insertAdjacentHTML('afterbegin', lightboxHTML);
}

function lightboxClose(event) {
	// Only trigger if we d an image)
	if (!(event.target instanceof HTMLImageElement)) {
		event.preventDefault();
		event.stopImmediatePropagation();

		var lightbox = document.getElementById("lightbox");
		if (lightbox) {
			lightbox.remove();
		}
	}
}