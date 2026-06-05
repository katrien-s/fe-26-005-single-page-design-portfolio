const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider__img')
const prevBtn = document.querySelector('slider__btn--prev');
const nextBtn = document.querySelector('slider__btn--next');

let currentIndex = 0;
const totalImages = images.length;

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`
}

prevBtn.addEventListener('click', function(){
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider()
})

nextBtn.addEventListener('click', function(){
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider()
})