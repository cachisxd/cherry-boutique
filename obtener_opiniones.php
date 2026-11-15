<?php
header('Content-Type: application/json; charset=utf-8');
require 'conexion.php';

$producto_id = filter_input(INPUT_GET, 'producto_id', FILTER_VALIDATE_INT, ['options' => ['min_range' => 0]]);
if ($producto_id === null || $producto_id === false) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Producto inválido']);
    exit;
}

$stmt = $conexion->prepare(
    'SELECT nombre, calificacion, comentario, DATE_FORMAT(creado_en, "%d/%m/%Y") AS fecha
     FROM opiniones WHERE producto_id = ? ORDER BY id DESC LIMIT 50'
);
$stmt->bind_param('i', $producto_id);
$stmt->execute();
$opiniones = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

$promedio = count($opiniones)
    ? round(array_sum(array_column($opiniones, 'calificacion')) / count($opiniones), 1)
    : null;

echo json_encode(['ok' => true, 'promedio' => $promedio, 'opiniones' => $opiniones]);