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

-- ---- USUARIO ADMIN ----
INSERT INTO usuario (email, contrasenia, idtipousuario)
VALUES
('admin@tiendacafe.com', 'admin', 1),
('cliente@tiendacafe.com', 'cliente', 2);

USE tiendacafe;
SELECT provincia.nombreprovincia, pais.nombrepais  from provincia left join pais on pais.idpais = provincia.idpais;

select * from provincia;

select * from usuario left join persona on usuario.email = persona.email

INSERT into persona (nombre, apellido, dni, fecha_nac, email, idprovincia)
VALUES
('juan', 'perez', '11222222', '1990-06-30', 'admin@tiendacafe.com', 1),
('juan', 'perez', '11222333', '1990-06-30', 'cliente4@gmail.com', 1),
('juan', 'perez', '11222444', '1990-06-30', 'cliente2@gmail.com', 1),
('juan', 'perez', '11222555', '1990-06-30', 'cliente3@gmail.com', 1),
('juan', 'perez', '11222666', '1990-06-30', 'cliente@gmail.c', 1),
('juan', 'perez', '11222777', '1990-06-30', 'cliente@gmail.com', 1),
('juan', 'perez', '11222888', '1990-06-30', 'cliente1000@gmail.com', 1),
('juan', 'perez', '11222999', '1990-06-30', 'cliente1001@gmail.com', 1)