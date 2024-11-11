let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    indicadores.forEach((indicador, i) => {
        indicador.classList.remove("active");
        if (i === index) {
            indicador.classList.add("active");
        }
    });
}

document.querySelector(".seta.esquerda").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
});

document.querySelector(".seta.direita").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
});

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

showSlide(slideIndex);
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 10000);
