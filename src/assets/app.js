function initSlider() {
	const slider = document.querySelector('.slider');
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slider__btn--prev');
	const nextBtn = document.querySelector('.slider__btn--next');

	if (!slider || slides.length === 0) return;

	let currentIndex = slides.length >= 3 ? 2 : 0;

	const slideWidth = slides[0].offsetWidth;
	const gap = 32;
	const sliderCenter = slider.offsetWidth / 2;
	const slideCenter = slideWidth / 2;

	slider.scrollLeft =
		(slideWidth + gap) * currentIndex - sliderCenter + slideCenter;

	if (prevBtn) {
		prevBtn.addEventListener('click', () => {
			currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
			slides[currentIndex].scrollIntoView({
				inline: 'center',
				block: 'nearest',
				behavior: 'smooth'
			});
		});
	}

	if (nextBtn) {
		nextBtn.addEventListener('click', () => {
			currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
			slides[currentIndex].scrollIntoView({
				inline: 'center',
				block: 'nearest',
				behavior: 'smooth'
			});
		});
	}

	slider.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') {
			currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
			slides[currentIndex].scrollIntoView({
				inline: 'center',
				block: 'nearest',
				behavior: 'smooth'
			});
		}

		if (e.key === 'ArrowRight') {
			currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
			slides[currentIndex].scrollIntoView({
				inline: 'center',
				block: 'nearest',
				behavior: 'smooth'
			});
		}
	});
}

initSlider();
