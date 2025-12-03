// -----------------------------
//   BOTÓN Validar (usará el servicio web)
// -----------------------------
function validar() {
    const cedula = document.getElementById("cedula").value.trim();

    if (cedula.length !== 11) {
        mostrar("La cédula debe tener 11 dígitos.", false);
        return;
    }

    // Llamada al servicio web en AwardSpace
    fetch(`http://validacedula.atwebpages.com/servicio.php?cedula=${cedula}`)
        .then(res => res.json())
        .then(data => {
            if (data.valida) {
                mostrar("✔ Cédula válida", true);
            } else {
                mostrar("✘ Cédula inválida", false);
            }
        })
        .catch(() => {
            mostrar("Error al conectar con el servicio web.", false);
        });
}

// -----------------------------
//   Función para mostrar resultado
// -----------------------------
function mostrar(msg, ok) {
    const salida = document.getElementById("resultado");
    salida.innerHTML = msg;
    salida.style.color = ok ? "green" : "red";
}

// -----------------------------
//   BOTÓN Limpiar
// -----------------------------
function limpiar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}

