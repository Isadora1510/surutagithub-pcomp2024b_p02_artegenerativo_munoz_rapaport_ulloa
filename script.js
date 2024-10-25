let currentQuote = 0;

function showQuote(index) {
    const quotes = document.querySelectorAll('blockquote');
    quotes.forEach((quote, i) => {
        quote.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % 3; // Cambia 3 por el número total de citas
    showQuote(currentQuote);
}

function prevQuote() {
    currentQuote = (currentQuote - 1 + 3) % 3; // Cambia 3 por el número total de citas
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

    // Calcular el índice de la nueva imagen
    currentIndex = (currentIndex + step + totalImages) % totalImages;

    // Mover el carrusel
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

let index = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    // Calcular la posición de desplazamiento
    const totalSlides = slides.length;
    
    // Aplicar la transformación al contenedor de imágenes
    document.querySelector('.carrusel-images').style.transform = `translateX(${-index * 100}%)`;
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    index += n;

    // Asegurarse de que el índice esté dentro del rango
    if (index >= slides.length) { index = 0; }
    if (index < 0) { index = slides.length - 1; }

    showSlides();
}

// Auto-slide cada 3 segundos
setInterval(() => {
   moveSlide(1);
}, 3000);

// Inicializar la visualización
showSlides();