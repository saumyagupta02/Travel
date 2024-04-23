const searchForm = document.querySelector('.d-flex');
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetId = e.target.dataset.target;
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const offsetTop = targetElement.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
const carousel = document.querySelector('#carouselExampleCaptions');
const carouselPrev = document.querySelector('.carousel-control-prev');
const carouselNext = document.querySelector('.carousel-control-next');

carouselPrev.addEventListener('click', () => {
  carousel.querySelector('.carousel-item.active').previousElementSibling?.classList.add('active');
  carousel.querySelector('.carousel-item.active').nextElementSibling?.classList.remove('active');
});

carouselNext.addEventListener('click', () => {
  carousel.querySelector('.carousel-item.active').nextElementSibling?.classList.add('active');
  carousel.querySelector('.carousel-item.active').previousElementSibling?.classList.remove('active');
});