let currentQuote = 0;

function showQuote(index) {
    const quotes = document.querySelectorAll('blockquote');
    quotes.forEach((quote, i) => {
        quote.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % 3; 
    showQuote(currentQuote);
}

function prevQuote() {
    currentQuote = (currentQuote - 1 + 3) % 3; 
    showQuote(currentQuote);
}


function preloadImages() {
    const photos = document.querySelectorAll('#photo-carousel .carousel img');
    photos.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;  // 
    });
}

let currentIndex = 0;

function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    currentIndex = (currentIndex + step + totalImages) % totalImages;
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

let index = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');

    const totalSlides = slides.length;
    document.querySelector('.carrusel-images').style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    index += n;

    if (index >= slides.length) { index = 0; }
    if (index < 0) { index = slides.length - 1; }

    showSlides();
}

setInterval(() => {
   moveSlide(1);
}, 3000);

showSlides();