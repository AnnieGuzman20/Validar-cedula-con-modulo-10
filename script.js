function validar() {
    const cedula = document.getElementById('cedula').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    if (cedula.length !== 11 || isNaN(cedula)) {
        resultadoDiv.textContent = "Ingrese una cédula válida de 11 dígitos.";
        return;
    }

    fetch(`servicio.php?cedula=${cedula}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultadoDiv.textContent = data.error;
            } else {
                resultadoDiv.textContent = data.valida
                    ? `La cédula ${data.cedula} es válida ✅`
                    : `La cédula ${data.cedula} es inválida ❌`;
            }
        })
        .catch(err => {
            resultadoDiv.textContent = "Error al conectar con el servicio web.";
            console.error(err);
        });
}

function limpiar() {
    document.getElementById('cedula').value = '';
    document.getElementById('resultado').textContent = '';
}
