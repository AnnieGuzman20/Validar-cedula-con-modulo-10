<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

if (!isset($_GET["cedula"])) {
    echo json_encode([
        "valida" => false,
        "mensaje" => "No se recibió la cédula"
    ]);
    exit;
}

$cedula = trim($_GET["cedula"]);

if (!preg_match("/^[0-9]{11}$/", $cedula)) {
    echo json_encode([
        "valida" => false,
        "mensaje" => "Cédula inválida"
    ]);
    exit;
}

$suma = 0;
for ($i = 0; $i < 10; $i++) {
    $num = intval($cedula[$i]);
    $num = ($i % 2 == 0) ? $num : ($num * 2 > 9 ? $num * 2 - 9 : $num * 2);
    $suma += $num;
}

$verificador = intval($cedula[10]);
$digEsperado = (ceil($suma / 10) * 10 - $suma) % 10;

echo json_encode([
    "valida" => ($digEsperado == $verificador),
    "mensaje" => ($digEsperado == $verificador ? "Cédula válida" : "Cédula incorrecta")
]);
