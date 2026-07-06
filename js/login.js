const usuarioGuardado = "admin";
const passwordGuardado = "1234";

const btnLogin = document.getElementById("btnLogin");
const inputUsuario = document.getElementById("usuario");
const inputPassword = document.getElementById("password");
const alertLogin = document.getElementById("alertLogin");
const logoLogin = document.getElementById("logoLogin");

btnLogin.addEventListener("click", validarLogin);

function validarLogin() {
    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();

    if (usuario === "" || password === "") {
        mostrarAlerta("El campo usuario o contraseña está vacío.", "warning");
        cambiarLogoError();
        return;
    }

    if (usuario === usuarioGuardado && password === passwordGuardado) {
        window.location.href = "dashboard.html";
    } else {
        mostrarAlerta("Hubo un error en la autentificación.", "danger");
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