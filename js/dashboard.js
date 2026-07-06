let numero = 15;

const btnPresionar = document.getElementById("btnPresionar");
const cardEstado = document.getElementById("cardEstado");
const cardHeader = document.getElementById("cardHeader");
const cardImagen = document.getElementById("cardImagen");
const cardTitulo = document.getElementById("cardTitulo");
const cardDescripcion = document.getElementById("cardDescripcion");
const cardFooter = document.getElementById("cardFooter");

btnPresionar.addEventListener("click", disminuirNumero);

function disminuirNumero() {
    numero--;

    if (numero === 0) {
        numero = 15;
    }

    actualizarDashboard();
}

function actualizarDashboard() {

    if (numero >= 11 && numero <= 15) {
        cambiarEstado(
            "primary",
            "Estado Normal",
            "Sistema en estado normal",
            "El sistema funciona correctamente. No existen riesgos importantes.",
            "https://placehold.co/600x300/0d6efd/ffffff?text=Estado+Normal",
            "Imagen de estado normal"
        );
    }

    if (numero >= 6 && numero <= 10) {
        cambiarEstado(
            "warning",
            "Estado de Alerta",
            "Sistema en estado de alerta",
            "El sistema requiere atención. Se recomienda revisar la situación.",
            "https://placehold.co/600x300/ffc107/000000?text=Estado+Alerta",
            "Imagen de estado de alerta"
        );
    }

    if (numero >= 1 && numero <= 5) {
        cambiarEstado(
            "danger",
            "Estado de Peligro",
            "Sistema en estado crítico",
            "El sistema se encuentra en una fase de peligro. Se debe actuar rápidamente.",
            "https://placehold.co/600x300/dc3545/ffffff?text=Estado+Peligro",
            "Imagen de estado de peligro"
        );
    }

    btnPresionar.textContent = `Presióname ${numero}`;
    cardFooter.textContent = `Número actual: ${numero}`;
}

function cambiarEstado(color, header, titulo, descripcion, imagen, alt) {
    btnPresionar.className = `btn btn-${color} btn-lg mb-4`;

    cardEstado.className = `card border-${color} shadow card-dashboard`;
    cardHeader.className = `card-header bg-${color}`;
    cardFooter.className = `card-footer bg-${color}`;

    if (color === "warning") {
        cardHeader.classList.add("text-dark");
        cardFooter.classList.add("text-dark");
    } else {
        cardHeader.classList.add("text-white");
        cardFooter.classList.add("text-white");
    }

    cardHeader.textContent = header;
    cardTitulo.textContent = titulo;
    cardDescripcion.textContent = descripcion;
    cardImagen.src = imagen;
    cardImagen.alt = alt;
}