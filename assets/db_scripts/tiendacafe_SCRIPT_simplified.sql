CREATE TABLE pais (
  idpais int NOT NULL AUTO_INCREMENT,
  nombrepais varchar(100) NOT NULL,
  PRIMARY KEY (idpais,nombrepais),
  UNIQUE KEY idpais_UNIQUE (idpais),
  UNIQUE KEY nombrepais_UNIQUE (nombrepais)
);

CREATE TABLE provincia (
  idprovincia int NOT NULL AUTO_INCREMENT,
  nombreprovincia varchar(100) NOT NULL,
  idpais int NOT NULL,
  PRIMARY KEY (idprovincia,nombreprovincia),
  UNIQUE KEY nombreprovincia_UNIQUE (nombreprovincia),
  KEY idpais_idx (idpais),
  CONSTRAINT fk_idpais FOREIGN KEY (idpais) REFERENCES pais (idpais)
);


CREATE TABLE tipousuario (
  idtipousuario int NOT NULL AUTO_INCREMENT,
  descripcion varchar(45) NOT NULL,
  activo tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (idtipousuario),
  UNIQUE KEY idusertype_UNIQUE (idtipousuario)
);

CREATE TABLE usuario (
  idusuario int NOT NULL AUTO_INCREMENT,
  email varchar(100) NOT NULL,
  contrasenia varchar(45) NOT NULL,
  idtipousuario int NOT NULL,
  activo tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (idusuario,email),
  UNIQUE KEY email_UNIQUE (email),
  KEY fk_tipousuario (idtipousuario),
  CONSTRAINT fk_tipousuario FOREIGN KEY (idtipousuario) REFERENCES tipousuario (idtipousuario)
);

CREATE TABLE persona (
  idpersona int NOT NULL AUTO_INCREMENT,
  nombre varchar(50) DEFAULT NULL,
  apellido varchar(50) DEFAULT NULL,
  dni varchar(20) DEFAULT NULL,
  fecha_nac date DEFAULT NULL,
  email varchar(100) NOT NULL,
  idprovincia int NOT NULL,
  activo tinyint(1) DEFAULT '1',
  PRIMARY KEY (idpersona,email),
  UNIQUE KEY dni_UNIQUE (dni),
  KEY fk_emailusuario_idx (email),
  KEY fk_idprovincia_idx (idprovincia),
  CONSTRAINT fk_emailusuario FOREIGN KEY (email) REFERENCES usuario (email),
  CONSTRAINT fk_idprovincia FOREIGN KEY (idprovincia) REFERENCES provincia (idprovincia)
);

CREATE TABLE tipoconsulta (
  idtipoconsulta int NOT NULL AUTO_INCREMENT,
  descripcion varchar(100) NOT NULL,
  activo tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (idtipoconsulta),
  UNIQUE KEY idtipoconsulta_UNIQUE (idtipoconsulta)
);

CREATE TABLE consulta (
  idconsulta int NOT NULL,
  idusuario int NOT NULL,
  consulta varchar(1500) NOT NULL,
  fecha date NOT NULL,
  PRIMARY KEY (idconsulta),
  KEY fk_idusuario_idx (idusuario),
  CONSTRAINT fk_idusuario FOREIGN KEY (idusuario) REFERENCES usuario (idusuario)
);

CREATE TABLE tipo_x_consulta (
  idconsulta int NOT NULL,
  idtipoconsulta int NOT NULL,
  KEY fk_idconsulta_idx (idconsulta),
  KEY fk_idtipoconsulta_idx (idtipoconsulta),
  CONSTRAINT fk_idconsulta FOREIGN KEY (idconsulta) REFERENCES consulta (idconsulta),
  CONSTRAINT fk_idtipoconsulta FOREIGN KEY (idtipoconsulta) REFERENCES tipoconsulta (idtipoconsulta)
);




