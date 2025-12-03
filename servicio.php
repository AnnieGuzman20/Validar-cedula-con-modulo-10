<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if (!isset($_GET["cedula"])) {
    echo json_encode(["error" => "No se recibió la cédula"]);
    exit;
}

$cedula = $_GET["cedula"];

// Validación Módulo 10
function validarCedula($cedula) {
    if (strlen($cedula) != 11) return false;

    $multiplicadores = [1,2,1,2,1,2,1,2,1,2];
    $suma = 0;

    for ($i=0; $i<10; $i++) {
        $producto = $cedula[$i] * $multiplicadores[$i];
        if ($producto >= 10) {
            $producto = ($producto % 10) + intdiv($producto, 10);
        }
        $suma += $producto;
    }

    $digitoVerificador = (10 - ($suma % 10)) % 10;

    return $digitoVerificador == $cedula[10];
}

$valida = validarCedula($cedula);

echo json_encode([
    "cedula" => $cedula,
    "valida" => $valida
]);
