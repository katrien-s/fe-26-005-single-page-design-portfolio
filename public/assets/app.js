const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider__btn--prev');
const nextBtn = document.querySelector('.slider__btn--next');

let currentIndex = 2;

slides[currentIndex].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });

prevBtn.addEventListener('click', () => {
	currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
	slides[currentIndex].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
	currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
	slides[currentIndex].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
});
