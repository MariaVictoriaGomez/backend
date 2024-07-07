-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tiendacafe
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `idconsulta` int NOT NULL,
  `idusuario` int NOT NULL,
  `consulta` varchar(1500) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idconsulta`),
  KEY `fk_idusuario_idx` (`idusuario`),
  CONSTRAINT `fk_idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pais`
--

DROP TABLE IF EXISTS `pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pais` (
  `idpais` int NOT NULL AUTO_INCREMENT,
  `nombrepais` varchar(100) NOT NULL,
  PRIMARY KEY (`idpais`,`nombrepais`),
  UNIQUE KEY `idpais_UNIQUE` (`idpais`),
  UNIQUE KEY `nombrepais_UNIQUE` (`nombrepais`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pais`
--

LOCK TABLES `pais` WRITE;
/*!40000 ALTER TABLE `pais` DISABLE KEYS */;
INSERT INTO `pais` VALUES (1,'Argentina'),(2,'Brasil'),(3,'Chile'),(4,'Colombia'),(5,'Paraguay');
/*!40000 ALTER TABLE `pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `idpersona` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `dni` varchar(20) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `idprovincia` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idpersona`,`email`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  KEY `fk_emailusuario_idx` (`email`),
  KEY `fk_idprovincia_idx` (`idprovincia`),
  CONSTRAINT `fk_emailusuario` FOREIGN KEY (`email`) REFERENCES `usuario` (`email`),
  CONSTRAINT `fk_idprovincia` FOREIGN KEY (`idprovincia`) REFERENCES `provincia` (`idprovincia`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (17,'juan','perez','11222222','1990-06-30','admin@tiendacafe.com',25,1),(18,'juan','perez','11222333','1990-06-30','cliente4@gmail.com',25,1),(19,'juan','perez','11222444','1990-06-30','cliente2@gmail.com',25,1),(22,'juan','perez','11222777','1990-06-30','cliente@gmail.com',25,1),(23,'juan','perez','11222888','1990-06-30','cliente1000@gmail.com',25,1),(24,'juan','perez','11222999','1990-06-30','cliente1001@gmail.com',25,1),(37,'Diego','Matias','99999999','2024-06-15','diegovillalba.96@gmail.com',25,1),(38,'Maria','Perez','77888999','2024-06-14','maria@perez.com',26,1),(39,'maria','juarez','88777999','2024-06-13','ma@pe.com',26,1),(40,'Diego','Matias','94669990','2024-06-21','diegovillalbaujo6@gmail.com',25,1),(41,'laura','baez','22333555','2024-06-13','laurabaez@tienda.com',34,1),(42,'fulano','mengano','44555576','2024-07-18','ff@gg.com',39,1),(43,'aaaa','aaaa','12345666','2024-07-11','hhh@ggg.com',34,1);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincia`
--

DROP TABLE IF EXISTS `provincia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provincia` (
  `idprovincia` int NOT NULL AUTO_INCREMENT,
  `nombreprovincia` varchar(100) NOT NULL,
  `idpais` int NOT NULL,
  PRIMARY KEY (`idprovincia`,`nombreprovincia`),
  UNIQUE KEY `nombreprovincia_UNIQUE` (`nombreprovincia`),
  KEY `idpais_idx` (`idpais`),
  CONSTRAINT `fk_idpais` FOREIGN KEY (`idpais`) REFERENCES `pais` (`idpais`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincia`
--

LOCK TABLES `provincia` WRITE;
/*!40000 ALTER TABLE `provincia` DISABLE KEYS */;
INSERT INTO `provincia` VALUES (25,'Buenos Aires',1),(26,'Ciudad Autónoma de Buenos Aires',1),(27,'Catamarca',1),(28,'Chaco',1),(29,'Chubut',1),(30,'Córdoba',1),(31,'Corrientes',1),(32,'Entre Ríos',1),(33,'Formosa',1),(34,'Jujuy',1),(35,'La Pampa',1),(36,'La Rioja',1),(37,'Mendoza',1),(38,'Misiones',1),(39,'Neuquén',1),(40,'Río Negro',1),(41,'Salta',1),(42,'San Juan',1),(43,'San Luis',1),(44,'Santa Cruz',1),(45,'Santa Fe',1),(46,'Santiago del Estero',1),(47,'Tierra del Fuego, Antártida e Islas del Atlántico Sur',1),(48,'Tucumán',1);
/*!40000 ALTER TABLE `provincia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_x_consulta`
--

DROP TABLE IF EXISTS `tipo_x_consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_x_consulta` (
  `idconsulta` int NOT NULL,
  `idtipoconsulta` int NOT NULL,
  KEY `fk_idconsulta_idx` (`idconsulta`),
  KEY `fk_idtipoconsulta_idx` (`idtipoconsulta`),
  CONSTRAINT `fk_idconsulta` FOREIGN KEY (`idconsulta`) REFERENCES `consulta` (`idconsulta`),
  CONSTRAINT `fk_idtipoconsulta` FOREIGN KEY (`idtipoconsulta`) REFERENCES `tipoconsulta` (`idtipoconsulta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_x_consulta`
--

LOCK TABLES `tipo_x_consulta` WRITE;
/*!40000 ALTER TABLE `tipo_x_consulta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_x_consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoconsulta`
--

DROP TABLE IF EXISTS `tipoconsulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoconsulta` (
  `idtipoconsulta` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idtipoconsulta`),
  UNIQUE KEY `idtipoconsulta_UNIQUE` (`idtipoconsulta`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoconsulta`
--

LOCK TABLES `tipoconsulta` WRITE;
/*!40000 ALTER TABLE `tipoconsulta` DISABLE KEYS */;
INSERT INTO `tipoconsulta` VALUES (7,'CAPSULAS REUTILIZABLES',1),(8,'CAFÉ DE ESPECIALIDAD',1),(9,'NUESTRAS DELICIAS',1),(10,'VAJILLA',1),(11,'CAFETERAS',1),(12,'MERCHANDISING',1),(13,'Cafeteria móvil',1),(14,'Coffee breaks',1),(15,'Merienda party',1),(16,'Curso de baratas',1),(17,'Alquiler de cafeteras',1),(18,'Envios a domicilio',1);
/*!40000 ALTER TABLE `tipoconsulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipousuario` (
  `idtipousuario` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idtipousuario`),
  UNIQUE KEY `idusertype_UNIQUE` (`idtipousuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipousuario`
--

LOCK TABLES `tipousuario` WRITE;
/*!40000 ALTER TABLE `tipousuario` DISABLE KEYS */;
INSERT INTO `tipousuario` VALUES (1,'admin',1),(2,'cliente',1),(3,'admin',1),(4,'cliente',1),(5,'admin',1),(6,'cliente',1);
/*!40000 ALTER TABLE `tipousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  `idtipousuario` int NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`idusuario`,`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_tipousuario` (`idtipousuario`),
  CONSTRAINT `fk_tipousuario` FOREIGN KEY (`idtipousuario`) REFERENCES `tipousuario` (`idtipousuario`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin@tiendacafe.com','admin',1,1),(2,'cliente4@gmail.com','cliente',2,1),(5,'cliente2@gmail.com','cliente',2,1),(16,'cliente@gmail.com','cliente',2,1),(18,'cliente1000@gmail.com','cliente',2,1),(19,'cliente1001@gmail.com','cliente',2,1),(40,'diegovillalba.96@gmail.com','123456',2,1),(41,'maria@perez.com','123456',2,1),(42,'ma@pe.com','123456',2,1),(43,'diegovillalbaujo6@gmail.com','123456',2,1),(44,'laurabaez@tienda.com','123456',2,1),(45,'ff@gg.com','123456',2,1),(46,'hhh@ggg.com','123456',2,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-01 21:10:04
