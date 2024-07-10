document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.main-bg-img');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 3000; // время между слайдами

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function setSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setSlide(index);
        });
    });

    setInterval(nextSlide, intervalTime);
});
