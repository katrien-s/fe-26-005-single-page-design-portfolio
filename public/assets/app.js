const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');

let currentIndex = 2;

const slideWidth = slides[0].offsetWidth;
const gap = 32; // $size-32
const sliderCenter = slider.offsetWidth / 2;
const slideCenter = slideWidth / 2;

slider.scrollLeft =
	(slideWidth + gap) * currentIndex - sliderCenter + slideCenter;

prevBtn.addEventListener('click', () => {
	currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	slides[currentIndex].scrollIntoView({
		inline: 'center',
		block: 'nearest',
		behavior: 'smooth'
	});
});

nextBtn.addEventListener('click', () => {
	currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	slides[currentIndex].scrollIntoView({
		inline: 'center',
		block: 'nearest',
		behavior: 'smooth'
	});
});
