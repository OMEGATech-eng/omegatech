let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

function mostrarSlide(index) {
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
    indiceSlide = (indiceSlide - 1 + slides.length) % slides.length;
    mostrarSlide(indiceSlide);
});

document.querySelector(".seta.direita").addEventListener("click", () => {
    indiceSlide = (indiceSlide + 1) % slides.length;
    mostrarSlide(indiceSlide);
});

function slideAtual(index) {
    indiceSlide = index;
    mostrarSlide(indiceSlide);
}

mostrarSlide(indiceSlide);
setInterval(() => {
    indiceSlide = (indiceSlide + 1) % slides.length;
    mostrarSlide(indiceSlide);
}, 10000);
