# Evaluación Sumativa 2

## Funcionalidades principales

### Login

* Usuario y contraseña guardados en memoria.
* Validación de campos vacíos.
* Validación de usuario y contraseña correctos.
* Alerta Bootstrap cuando los datos están vacíos o son incorrectos.
* Cambio de logo cuando existe error de autenticación.
* Redirección al dashboard cuando el login es correcto.
* Uso de `addEventListener` en el botón de inicio de sesión.

### Dashboard

* Botón Bootstrap con texto **Presióname 15**.
* Card Bootstrap con header, body y footer.
* La card contiene imagen, título, descripción y número actualizado.
* Al presionar el botón, el número disminuye.
* Entre 15 y 11 se muestra estado `primary`.
* Entre 10 y 6 se muestra estado `warning`.
* Entre 5 y 1 se muestra estado `danger`.
* Al llegar a 0, el sistema vuelve al inicio.

## Estructura del proyecto

```text
evaluacion-sumativa-2/
├── index.html
├── panel.html
├── README.md
├── css/
│   └── style.css
└── js/
    ├── login.js
    └── dashboard.js
```

## Tecnologías utilizadas

* HTML5
* CSS3
* Bootstrap
* JavaScript
* Git
* GitHub

## Usuario de prueba

```text
Usuario: admin
Contraseña: 1234
```

##commits utilizados
*estructura inicial
git add .
git commit -m "Creo estructura inicial del sistema web"
git push

*login
git add index.html js/login.js css/style.css
git commit -m "Agrego login con validacion y alertas Bootstrap"
git push

*dashboard
git add panel.html js/dashboard.js css/style.css
git commit -m "Agrego tablero interactivo con boton y tarjeta dinamica"
git push

*readme
git add README.md
git commit -m "Agrego README del proyecto"
git push

*correccion final
git add .
git commit -m "Corrijo detalles finales del sistema web"
git push

## Autor

Ronaldo Palacios
