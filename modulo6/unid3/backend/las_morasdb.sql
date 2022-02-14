-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: las_morasdb
-- ------------------------------------------------------
-- Server version	5.7.36

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
-- Table structure for table `listanovedades`
--

DROP TABLE IF EXISTS `listanovedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listanovedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `subtitulo` text,
  `cuerpo` text,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listanovedades`
--

LOCK TABLES `listanovedades` WRITE;
/*!40000 ALTER TABLE `listanovedades` DISABLE KEYS */;
INSERT INTO `listanovedades` VALUES (18,'Actividades y deportes náuticos','15/12/2021','El Río Uruguay es tranquilo, ideal para la práctica de diversas actividades náuticas, tales como: kayak, remo, windsurf, navegación a vela, esquí acuático y natación. Es habitual la presencia de prestadores habilitados que ofrecen alquiler de embarcaciones, paseos o prácticas de diversos deportes y actividades.','fopfperwu6ccoj3jmfjr'),(19,'Balnearios para todos los gustos','22/12/2021','La extensión de playas comprende los balnearios: “Playa Norte”, “Punta Colón”, “Piedras Coloradas”, “Santiago Inkier”, “Playa Honda” y “Playa Nueva”, todos ubicados próximos a los principales establecimientos de alojamientos. En temporada estival cuentan con la habilitación y protección de guardavidas siempre están correctamente boyadas.','vtjkdaqegnfqmaooy5ws'),(20,'Playas del Norte','12/01/2022','Las playas del norte, serenas, naturales, más tendidas hacia el río que hacia la arena, caracterizadas siempre por la sombra que salpica sus terrenos dibujando espacios amorfos que atraen como imanes a la familia; se cortan en un cambio abrupto ante la extensión soleada y divertida de la espléndida Punta Colón, con su apariencia relajada y por sobre todo limpia.','a3c8fv3msivbkhc0p6zn'),(17,'Playas que invitan...','08/12/2021','Colón posee varios kilómetros de arenas blancas sobre el Río Uruguay formando la continuidad de balnearios de agua dulce más importantes del país. Las playas e islas son uno de los principales atractivos de la ciudad y un lugar ideal para el descanso, la recreación y el disfrute de excelentes momentos.','dnijtlfikuzvhddxvxor');
/*!40000 ALTER TABLE `listanovedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'jose','81dc9bdb52d04dc20036dbd8313ed055'),(2,'flavia','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-14 11:54:54
