<?php

$conexion = new mysqli('TU_HOST', 'TU_USUARIO', 'TU_CONTRASEÑA', 'TU_BASE_DE_DATOS');

if ($conexion->connect_error) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    die(json_encode(['ok' => false, 'error' => 'No se pudo conectar a la base de datos']));
}

$conexion->set_charset('utf8mb4');