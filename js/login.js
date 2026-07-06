const usuarioGuardado = "admin";
const passwordGuardado = "1234";

const formLogin = document.getElementById("formLogin");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const alertLogin = document.getElementById("alertLogin");
const logoLogin = document.getElementById("logoLogin");

formLogin.addEventListener("submit", validarLogin);

function validarLogin(event) {
    event.preventDefault();

    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();

    if (usuario === "" || password === "") {
        mostrarAlerta("Debe completar todos los campos.", "warning");
        cambiarLogoError();
        return;
    }

    if (usuario === usuarioGuardado && password === passwordGuardado) {
        window.location.href = "dashboard.html";
    } else {
        mostrarAlerta("Error en la autentificación. Usuario o contraseña incorrectos.", "danger");
        cambiarLogoError();
    }
}

function mostrarAlerta(mensaje, tipo) {
    alertLogin.textContent = mensaje;
    alertLogin.className = `alert alert-${tipo}`;
}

function cambiarLogoError() {
    logoLogin.textContent = "✕";
    logoLogin.classList.remove("logo-ok");
    logoLogin.classList.add("logo-error");
}