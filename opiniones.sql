CREATE DATABASE IF NOT EXISTS cherry_boutique
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cherry_boutique;

CREATE TABLE IF NOT EXISTS opiniones (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  producto_id  INT NOT NULL,
  nombre       VARCHAR(60) NOT NULL,
  calificacion TINYINT NOT NULL,
  comentario   VARCHAR(500) NOT NULL,
  creado_en    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_producto (producto_id)
);