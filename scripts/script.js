let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

function mostarSlide(index) {
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
    mostarSlide(indiceSlide);
});

document.querySelector(".seta.direita").addEventListener("click", () => {
    indiceSlide = (indiceSlide + 1) % slides.length;
    mostarSlide(indiceSlide);
});

function slideAtual(index) {
    indiceSlide = index;
    mostarSlide(indiceSlide);
}

mostarSlide(indiceSlide);
setInterval(() => {
    indiceSlide = (indiceSlide + 1) % slides.length;
    mostarSlide(indiceSlide);
}, 10000);
