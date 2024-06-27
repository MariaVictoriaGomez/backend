USE tiendacafe;

-- ---- TIPO DE USUARIOS -----
INSERT INTO tipousuario (tipousuario.descripcion)
VALUES 
('admin'),
('cliente');

-- ----- PAISES ----
INSERT INTO pais (pais.nombrepais)
VALUES
('Argentina'),
('Brasil'),
('Chile'),
('Colombia'),
('Paraguay');

-- ---- PROVINCIAS ----
INSERT INTO provincia (provincia.nombreprovincia, provincia.idpais)
VALUES
('Buenos Aires', 1),
('Ciudad Autónoma de Buenos Aires', 1),
('Catamarca', 1),
('Chaco', 1),
('Chubut', 1),
('Córdoba', 1),
('Corrientes', 1),
('Entre Ríos', 1),
('Formosa', 1),
('Jujuy', 1),
('La Pampa', 1),
('La Rioja', 1),
('Mendoza', 1),
('Misiones', 1),
('Neuquén', 1),
('Río Negro', 1),
('Salta', 1),
('San Juan', 1),
('San Luis', 1),
('Santa Cruz', 1),
('Santa Fe', 1),
('Santiago del Estero', 1),
('Tierra del Fuego, Antártida e Islas del Atlántico Sur', 1),
('Tucumán', 1);

-- ---- TIPOS CONSULTAS ----
INSERT INTO tipoconsulta (tipoconsulta.descripcion)
VALUES
('Capsulas reutilizables'),
('Cafe especialidad'),
('Nuestras delicias'),
('Vajilla'),
('Cafeteras'),
('Merchandising');


