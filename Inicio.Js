// Texto dinámico
const frases = ["Alta Cocina", "Sabores Únicos", "Experiencia de Lujo"];
let indiceFrase = 0, indiceLetra = 0, borrando = false;
const textoElemento = document.getElementById("texto-dinamico");

function escribirTexto() {
    let fraseActual = frases[indiceFrase];
    if (!borrando) {
        textoElemento.textContent = fraseActual.substring(0, indiceLetra + 1);
        indiceLetra++;
        if (indiceLetra === fraseActual.length) {
            borrando = true;
            setTimeout(escribirTexto, 1500);
            return;
        }
    } else {
        textoElemento.textContent = fraseActual.substring(0, indiceLetra - 1);
        indiceLetra--;
        if (indiceLetra === 0) {
            borrando = false;
            indiceFrase = (indiceFrase + 1) % frases.length;
        }
    }
    setTimeout(escribirTexto, borrando ? 100 : 150);
}
escribirTexto();

// Carrusel de imágenes del Hero
const images = document.querySelectorAll('.carousel img');
let current = 0;
setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}, 4000);