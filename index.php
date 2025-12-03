<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validar Cédula - Algoritmo Módulo 10</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>Validador de Cédula usando el Algoritmo Módulo 10</h1>
    <p>Ingrese una cédula de 11 dígitos:</p>
    <input type="text" id="cedula" maxlength="11" placeholder="Ej: 00113918205">
    <button onclick="validar()">Validar</button>
    <button onclick="limpiar()">Limpiar</button>
    <div class="resultado" id="resultado"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
