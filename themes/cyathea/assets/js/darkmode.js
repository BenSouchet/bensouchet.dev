document.addEventListener("DOMContentLoaded", function(event) {

	// Get dark mode var from the local storage
	var darkMode = localStorage.getItem('darkMode');
	// Get the buttons elements
	var btnLightTheme = document.getElementById('light-theme-btn');
	var btnDarkTheme = document.getElementById('dark-theme-btn');

	// If the var doesn't exist in the local storage
	if (darkMode === null) {
		// Retrieve the dark mode status
		if (window.matchMedia) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				darkMode = "true";
			} else {
				darkMode = "false";
			}
		} else {
			// If we cannot know, we enable the dark mode by default
			darkMode = "true";
		}
	}

	if (darkMode === "true") {
		btnLightTheme.disabled = false;
		btnDarkTheme.disabled = true;
	} else {
		btnLightTheme.disabled = true;
		btnDarkTheme.disabled = false;
	}

	// Add the class dark to the html tag to use the proper CSS custom properties
	if (JSON.parse(darkMode) === true) {
		document.documentElement.classList.add('dark');
	}

	// Set event handlers
	btnLightTheme.onclick = (event) => {
		localStorage.setItem('darkMode', "false");
		document.documentElement.classList.remove('dark');
		btnLightTheme.disabled = true;
		btnDarkTheme.disabled = false;
	};
	btnDarkTheme.onclick = (event) => {
		localStorage.setItem('darkMode', "true");
		document.documentElement.classList.add('dark');
		btnLightTheme.disabled = false;
		btnDarkTheme.disabled = true;
	};

});