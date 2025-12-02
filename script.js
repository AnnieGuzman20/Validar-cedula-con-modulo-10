async function validar() {
  const cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");

  if (!/^\d{11}$/.test(cedula)) {
    resultado.textContent = "❌ CÉDULA INCORRECTA (debe tener 11 dígitos)";
    return;
  }

  try {
  
    const url = "servicioweb-modulo10.infinityfree.me" + cedula;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    // data.mensaje viene del PHP
    resultado.textContent = data.mensaje;

  } catch (error) {
    resultado.textContent = "⚠️ Error al conectar con el servicio web";
  }
}
