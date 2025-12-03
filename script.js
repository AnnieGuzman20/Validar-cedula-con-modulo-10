async function validar() {
  const cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");

  if (!/^\d{11}$/.test(cedula)) {
    resultado.textContent = "❌ CÉDULA INCORRECTA (debe tener 11 dígitos)";
    return;
  }

  try {
    const url = `http://servicioweb-modulo10.infinityfree.me/validarCedula.php?cedula=${cedula}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    resultado.textContent = data.mensaje;

  } catch (error) {
    resultado.textContent = "⚠️ Error al conectar con el servicio web";
  }
}
