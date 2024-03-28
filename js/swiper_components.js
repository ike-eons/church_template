try {
	var swiper = new Swiper(".swiper", {
		// Optional parameters
		effect: "fade",

		direction: "horizontal",
		loop: true,
		autoplay: {
			delay: 5000,
		},

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			// dynamicBullets:true,
			clickable: true,
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-nav-right",
			prevEl: ".swiper-nav-left",
		},
	});

	console.log(swiper);

	console.log("**********");

	// Card Slider
	var cardSlider = new Swiper(".cardSlider", {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			520: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});

	console.log(cardSlider);
} catch (error) {
	// Handle initialization errors
	console.error("Slider initialization error:", error);
	// Optionally, you can display a message to the user or perform additional error handling logic.
}
