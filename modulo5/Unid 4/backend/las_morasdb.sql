-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-01-2022 a las 15:04:42
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `las_morasdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `idnovedades` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `titulonovedad` varchar(300) DEFAULT NULL,
  `textonovedad` varchar(500) DEFAULT NULL,
  `linkimagen` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idnovedades`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='novedades';

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`idnovedades`, `fecha`, `titulonovedad`, `textonovedad`, `linkimagen`) VALUES
(1, '2022-01-03 00:00:00', 'Novedad de prueba', 'Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba.', 'http://link.de.prueba.com/img.jpg'),
(2, '2022-01-05 00:00:00', 'Novedad de prueba2', 'Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba.', 'http://link.de.prueba.com/img.jpg'),
(3, '2022-01-05 00:00:00', 'Novedad de prueba3', 'Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba. Texto de novedad de prueba.', 'http://link.de.prueba.com/img.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'jose', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pedro', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'tito', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
