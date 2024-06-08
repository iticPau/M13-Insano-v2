-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: insano-backend
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Insano Computer','Insano Computer és una botiga en línia especialitzada en tecnologia, oferint una àmplia gamma de productes de qualitat i un servei al client excepcional. La nostra missió és millorar constantment l\'experiència de compra en línia amb solucions innovadores i una atenció personalitzada.','+34 584-241-429');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Mouse Óptico Inalámbrico','Diseñado para la comodidad, este mouse ofrece precisión y movilidad sin cables.','Conexión inalámbrica; sensor óptico de alta precisión; diseño ergonómico; compatible con múltiples sistemas operativos.','20.99','Accesorios','https://m.media-amazon.com/images/I/41n9vXMm1mL._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(2,'Teclado Mecánico RGB','eclado mecánico con retroiluminación RGB, ideal para gaming y trabajo prolongado.','Switches mecánicos duraderos; iluminación RGB personalizable; teclas programables; conexión USB.','50.88','Accesorios','https://m.media-amazon.com/images/I/61ikRIkpqgL._AC_UF894,1000_QL80_.jpg',1),(3,'Monitor LED 24\" Full HD','Monitor de 24 pulgadas con resolución Full HD, ideal para cine en casa y diseño gráfico.','Resolución 1920x1080; tasa de refresco de 60 Hz; panel LED; entradas HDMI y VGA.','120','Monitores','https://m.media-amazon.com/images/I/61DDUrEWzcL._AC_UF894,1000_QL80_.jpg',1),(4,'Monitor Curvo 27\" Gaming','Monitor curvo de 27 pulgadas diseñado para una experiencia de juego inmersiva.','Resolución 2560x1440; curvatura 1500R; tasa de refresco de 144 Hz; tecnología FreeSync.','299','Monitores','https://m.media-amazon.com/images/I/51+aukI+DhL._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(5,'Combo Teclado y Ratón Inalámbricos','ombo de teclado y ratón inalámbricos, perfecto para un escritorio limpio y organizado.','Conexión inalámbrica 2.4 GHz; diseño compacto y moderno; teclas de bajo perfil; ratón con sensor óptico.','30','Teclados y Ratones','https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(6,'Ratón Gaming RGB','Ratón para gaming con iluminación RGB y sensor de alta precisión.','Sensor óptico de 7200 DPI; iluminación RGB personalizable; 7 botones programables; diseño ergonómico.','25','Teclados y Ratones','https://m.media-amazon.com/images/I/610JKJVskzL._AC_UF894,1000_QL80_.jpg',1),(7,'Auriculares Bluetooth con Cancelación de Ruido','Auriculares inalámbricos con tecnología de cancelación de ruido activa para una experiencia auditiva superior.','Conexión Bluetooth 5.0; cancelación activa de ruido; hasta 20 horas de batería; micrófono integrado.','60','Auriculares y Altavoces','https://m.media-amazon.com/images/I/41MHZdMcWAL._AC_.jpg',1),(8,'Altavoz Bluetooth Portátil','Altavoz portátil con conexión Bluetooth, ideal para llevar música a cualquier lugar.','Conexión Bluetooth; batería recargable de 10 horas de duración; resistente al agua; sonido de alta calidad.','35','Auriculares y Altavoces','https://m.media-amazon.com/images/I/71tdr4l9DRL._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(9,'Tarjeta Gráfica GeForce RTX 3070','Tarjeta gráfica de alto rendimiento para gaming y creación de contenido.','8 GB de memoria GDDR6; arquitectura Ampere; ray tracing en tiempo real; tecnología DLSS.','500','Componentes Hardware','https://m.media-amazon.com/images/I/71zBEiajctL._AC_UF894,1000_QL80_.jpg',1),(10,'SSD Interno 1TB','Unidad de estado sólido interna con 1TB de capacidad, mejora significativamente el tiempo de arranque y carga de aplicaciones.','1 TB de capacidad; interfaz SATA 6.0 Gb/s; lectura 550 MB/s; escritura 520 MB/s.','100','Componentes Hardware','https://m.media-amazon.com/images/I/61t+yR9-8JL._AC_UF894,1000_QL80_.jpg',1),(11,'PC Gaming de Alto Rendimiento','Computadora de escritorio configurada para el máximo rendimiento en juegos y tareas exigentes.','CPU Intel i7; 16 GB de RAM; tarjeta gráfica RTX 3060; SSD de 512 GB; incluye Windows 10.','1500','PC Sobre Mesa','https://m.media-amazon.com/images/I/81+0uGCiqYL._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(12,'PC de Oficina Eficiente','PC de escritorio optimizado para tareas de oficina, con eficiencia energética y rendimiento estable.','CPU AMD Ryzen 5; 8 GB de RAM; SSD de 256 GB; sistema operativo Linux; consumo energético reducido.','450','PC Sobre Mesa','https://m.media-amazon.com/images/I/61QHwPzkm3L._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(13,'Laptop Ultrabook de 13 Pulgadas','Portátil ultraligero y potente, ideal para profesionales en movimiento.','Pantalla de 13 pulgadas Full HD; CPU Intel Core i5; 8 GB de RAM; SSD de 256 GB; batería de larga duración.','800','Portátiles','https://m.media-amazon.com/images/I/71sJ00K-s-L._AC_UF894,1000_QL80_DpWeblab_.jpg',1),(14,'Laptop Gaming 15 Pulgadas','Portátil de gaming con potentes especificaciones para una experiencia de juego superior en cualquier lugar.','Pantalla de 15.6 pulgadas Full HD; CPU Intel Core i7; 16 GB de RAM; SSD de 512 GB; tarjeta gráfica GTX 1660 Ti.','1200','Portátiles','https://m.media-amazon.com/images/I/614FlNlTnsS._AC_UF894,1000_QL80_.jpg',1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (27,'Carlos','Fernández','carlosfdez','$2a$10$m2PDHvC8M1kDNs3NvubnkurVXwZKOqOAWqHZgmtzJr8YxwKlkeqrm','carlos.fernandez@example.com','Plaza Mayor 56, Sevilla','633124578'),(28,'Elena','Ruiz','elenaruiz','$2a$10$caKhfToV4eBvzCecxXBDqOElx3n6Seie1lza20QA6iUuntcG5bgQa','elena.ruiz@example.com','Ronda de la Universidad 19, Valencia','655789123'),(29,'prueba','prueba','prueba','$2a$10$pE/3xi3djXP/Vom6WTO7teC/K69yblLRvnrWMONW5KBw.H7mmnvnC','prueba','prueba','prueba'),(30,'test','test','test','$2a$10$bLvLIqGH/GZuT4bODQFk.uW25aN8WQ/tE.Kcb7CEiKdlFp.0d7TU.','test','test','test'),(31,'test2','test2','test2','$2a$10$mM9ps7mYEg6c6T/VyK57NeGrWUaWf5oZaYEiFb2DpNGeBL1dXjKjC','test2','test2','test2'),(32,'aa','aa','aa','$2a$10$fZstgTn.sk2grsLEGm0ld.vaND/fU5ghQRrU2S2m6SpAZ1gF7WAmO','aa','aa','aa'),(33,'nina','fernandez','nina14','$2a$10$r98eLvqcemx2oBZupqQS4OxqKlFUCdKGpLZoSrZBT0M75e2LT0Obi','nina@gmail.com','Calle Nina 3','658764312');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario_producto`
--

LOCK TABLES `usuario_producto` WRITE;
/*!40000 ALTER TABLE `usuario_producto` DISABLE KEYS */;
INSERT INTO `usuario_producto` VALUES (52,'test2',2,'2024-05-11T15:26:51.269Z',1,42.89),(53,'aa',2,'2024-05-22T17:35:50.497Z',6,297.29),(54,'aa',4,'2024-05-22T17:35:50.497Z',10,2982.01),(55,'aa',6,'2024-05-22T17:36:10.270Z',2,42.01),(56,'nina14',14,'2024-06-08T09:01:31.325Z',2,2392.01),(57,'nina14',8,'2024-06-08T09:01:31.325Z',1,27.01),(58,'nina14',9,'2024-06-08T09:03:25.650Z',2,992.01),(59,'nina14',6,'2024-06-08T09:03:25.650Z',2,42.01),(60,'nina14',12,'2024-06-08T15:24:07.714Z',2,892.01);
/*!40000 ALTER TABLE `usuario_producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-08 17:29:26
