
<?php
header('Content-Type: application/json; charset=utf-8');
require 'conexion.php';
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Método no permitido']);
    exit;
}
 
// producto_id = 0 significa "opinión general de la tienda"
$producto_id  = filter_input(INPUT_POST, 'producto_id', FILTER_VALIDATE_INT, ['options' => ['min_range' => 0]]);
$calificacion = filter_input(INPUT_POST, 'calificacion', FILTER_VALIDATE_INT,
                             ['options' => ['min_range' => 1, 'max_range' => 5]]);
$nombre       = trim($_POST['nombre'] ?? '');
$comentario   = trim($_POST['comentario'] ?? '');
 
if ($producto_id === null || $producto_id === false || !$calificacion
    || $nombre === '' || mb_strlen($nombre) > 60
    || $comentario === '' || mb_strlen($comentario) > 500) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Revisa los datos: nombre, calificación (1 a 5) y comentario son obligatorios']);
    exit;
}
 
// Consulta preparada: evita inyección SQL
$stmt = $conexion->prepare(
    'INSERT INTO opiniones (producto_id, nombre, calificacion, comentario) VALUES (?, ?, ?, ?)'
);
$stmt->bind_param('isis', $producto_id, $nombre, $calificacion, $comentario);
 
if ($stmt->execute()) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No se pudo guardar la opinión']);
}
 