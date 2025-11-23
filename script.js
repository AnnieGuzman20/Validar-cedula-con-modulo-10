function validarCedula(cedula) {
  if (!/^\d{11}$/.test(cedula)) {
    return "❌ CÉDULA INCORRECTA (debe tener 11 dígitos)";
  }

  let suma = 0;
  for (let i = 0; i < 10; i++) {
    let num = parseInt(cedula.charAt(i));
    if (i % 2 === 0) {
      num *= 1;
    } else {
      num *= 2;
      if (num > 9) num -= 9;
    }
    suma += num;
  }

  let verificador = parseInt(cedula.charAt(10));
  let siguienteDecena = Math.ceil(suma / 10) * 10;
  let digitoEsperado = siguienteDecena - suma;
  if (digitoEsperado === 10) digitoEsperado = 0;

  if (digitoEsperado === verificador) {
    return "✅ LA CÉDULA ES CORRECTA";
  } else {
    return "❌ LA CÉDULA ES INCORRECTA";
  }
}

function validar() {
  const cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");
  const mensaje = validarCedula(cedula);
  resultado.textContent = mensaje;
}
