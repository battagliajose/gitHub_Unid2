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
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listanovedades`
--

LOCK TABLES `listanovedades` WRITE;
/*!40000 ALTER TABLE `listanovedades` DISABLE KEYS */;
INSERT INTO `listanovedades` VALUES (5,'La eliminación que cambió para siempre al Cholo Simeone: “Tengo un equipo de cagones”','En su serie documental, el entrenador argentino recordó el cruce entre River Plate y San Lorenzo por la Copa Libertadores 2008 y reveló qué les dijo a sus jugadores tras aquel histórico partido','Hace algunos días se estrenó “Simeone. Vivir partido a partido”, la miniserie documental que retrata la carrera del Cholo, enfocada principalmente en la última temporada con el Atlético de Madrid, cuando fue campeón de La Liga. Entre los tantos recuerdos que repasa el técnico argentino, se destaca lo ocurrido el 8 de mayo de 2008 cuando River Plate y San Lorenzo se cruzaron por los octavos de final de la Copa Libertadores.\r\n\r\nSimeone venía de consagrarse campeón con Estudiantes de La Plata del Torneo Apertura 2006 en un desenlace vibrante ante Boca Juniors que se definió en una inédita final. En aquel certamen, el Pincha marcó 35 goles en 23 partidos, siete en el clásico contra Gimnasia, y había llegado a ganar 11 compromisos de manera consecutiva: “Lo teníamos que parar para que no atacara tanto”, confesó Óscar Ortega, histórico preparador físico del Cholo, en el documental disponible en Prime Video, la plataforma de streaming de Amazon. Es que en aquel entonces, el estilo de juego del joven entrenador que había tenido una breve experiencia en Racing estaba más asociado a la faceta ofensiva que a la defensiva, aunque la actitud aguerrida también era una de sus características.',NULL),(4,'Más allá del FMI: los 6 puntos débiles del Banco Central para controlar el dólar libre','Mientras que las cotizaciones alternativas de la divisa registraron máximos históricos en la última semana, se tensó la brecha cambiaria y los activos externos de la entidad cayeron a un mínimo en cinco años','El 2022 empezó complicado en términos financieros. Una de las novedades salientes pasó por el mercado cambiario, donde la cotización de los dólares que se negocian por fuera del “cepo” oficial anotaron nuevos máximos nominales el pasado jueves.\r\n\r\nAunque el tipo de cambio libre avanza en enero a menor ritmo que la inflación -un 2,8% contra un 4% estimado-, se tensa la ya muy amplia brecha cambiaria, por encima del 100%, después de haber tocado el 120% antes del anuncio de un acuerdo entre el Gobierno y el Fondo Monetario Internacional (FMI).',NULL),(12,'Clases en CABA: no se aislarán más contactos estrechos asintomáticos y eliminarán las burbujas','El gobierno porteño anunció el regreso de la normalidad escolar. Los barbijos seguirán siendo obligatorios a partir de cuarto grado','El gobierno porteño anunció los nuevos protocolos para el regreso a la normalidad escolar desde el 22 de febrero, cuando se pondrá en marcha el ciclo lectivo. A diferencia del año pasado, ya no funcionarán las burbujas ni se aislarán contactos estrechos asintomáticos, lo que permitirá una mayor continuidad en la asistencia. Por su parte, el barbijo seguirá siendo obligatorio a partir de cuarto grado dentro del aula.\r\n\r\nEl jefe de Gobierno porteño, Horacio Rodríguez Larreta, el jefe de Gabinete, Felipe Miguel, la ministra de Educación, Soledad Acuña, y su par de Salud, Fernán Quirós, estuvieron a cargo del anuncio. Los funcionarios reiteraron que no se pedirá pase sanitario en ninguna escuela y explicaron que la situación sanitaria actual permite avanzar en mayor normalidad escolar.',NULL),(11,'Ricardo Lorenzetti: “La Corte no va a ceder a ninguna presión como nunca hemos cedido”','El ministro del máximo tribunal se refirió a la movilización realizada la semana pasada. “No se puede aceptar que un grupo de personas que tienen una causa judicial o un procesamiento pida que el juez que los investiga renuncie”, planteó','Ricardo Lorenzetti, ministro de la Corte Suprema de Justicia, aseguró que los integrantes del tribunal no cederán ante las presiones luego de que la semana pasada el oficialismo impulsara una movilización al Palacio de Tribunales.\r\n\r\nEn diálogo con el periodista Eduardo Feinmann en radio Mitre, el magistrado planteó: “Quiero dejar en claro que la Corte no va a ceder a ninguna presión como nunca hemos cedido”.\r\n\r\nEl jurista diferenció las personas que estuvieron en la manifestación contra la Corte. Dijo que hay dirigentes que tienen intereses legítimos para reformar el Poder Judicial y es algo entendible. “Lo que no se puede aceptar es que una persona que tiene una causa judicial o un procesamiento o que ha cometido un delito y es investigada, pida que el juez que lo investiga renuncie; eso es una base en el estado de derecho y el juez tiene que tener la estabilidad necesaria”, explicó.',NULL);
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

-- Dump completed on 2022-02-07 21:39:07
