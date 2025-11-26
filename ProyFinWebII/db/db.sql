-- BD
DROP DATABASE IF EXISTS node_crud;
CREATE DATABASE node_crud;
USE node_crud;

-- Tabla "users"
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password)
VALUES
('Carlos Herrera', 'carlos@aragon.unam', '12345'),
('María López',   'maria@aragon.unam',  'pass1'),
('Juan Pérez',    'juan@aragon.unam',   'abcde'),
('Sofía Ramos',   'sofia@aragon.unam',  'sofia1'),
('Luis Ortega',   'luis@aragon.unam',   'elui');

-- Tabla "lista"
DROP TABLE IF EXISTS lista;
CREATE TABLE lista (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    carrera VARCHAR(100) NOT NULL,
    semestre INT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO lista (name, email, carrera, semestre)
VALUES
('Ana Martínez',  'ana@aragon.unam',    'Ingenieria en Computacion', 2),
('Pedro Gómez',   'pedro@aragon.unam',  'Ingeniería Civil', 6),
('Lucía Fernández','lucia@aragon.unam', 'Diseño Industrial', 3),
('Miguel Torres', 'miguel@aragon.unam', 'Arquitectura', 4),
('Valeria Ruiz',  'valeria@aragon.unam','Psicología', 1);

-- Consultas
SELECT * FROM node_crud.users;
SELECT * FROM node_crud.lista;