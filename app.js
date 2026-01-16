

let index = 0;
const totalImages = 5; 

function showSlide() {
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${index * 600}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalImages;
  showSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  showSlide();
});

// Auto slide every 3 seconds
setInterval(() => {
  index = (index + 1) % totalImages;
  showSlide();
}, 3000);


