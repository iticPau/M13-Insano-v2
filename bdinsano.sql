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
INSERT INTO `producto` VALUES (1,'Ordenador','descripcion de ordenador','a;b;c;d','500','ordenadores','../assets/computer-proyecto.png',1),(2,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(3,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(4,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(5,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(6,'Ordenador','descripcion de ordenador','a;b;c;d','500','ordenadores','../assets/computer-proyecto.png',1),(7,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(8,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(9,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(10,'Ordenador','descripcion de ordenador','a;b;c;d','500','ordenadores','../assets/computer-proyecto.png',1),(11,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(12,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(13,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(14,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(15,'Ordenador','descripcion de ordenador','a;b;c;d','500','ordenadores','../assets/computer-proyecto.png',1),(16,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(17,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1),(18,'television','descripcion de television','1;2;3;4','900','televisores','../assets/computer-proyecto.png',1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Pérez López','juanperez','1234','juanperez@email.com','Calle Falsa 123, Ciudad, País','555-1234-567'),(2,'Laura','García Torres','lauragt','1234','lauragt@example.com','Avenida Siempre Viva 742, Springfield','555-6789-010'),(3,'Pepe','Pepe López','pepelopez','1234','pepelopez@email.com','Calle Falsa 123, Ciudad, País','555-9852-512'),(4,'Arturo','Arturo Torres','arturogt','1234','arturogt@example.com','Avenida Siempre Paraiso 915, Barcelona','555-8921-951');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuario_producto`
--

LOCK TABLES `usuario_producto` WRITE;
/*!40000 ALTER TABLE `usuario_producto` DISABLE KEYS */;
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

-- Dump completed on 2024-05-06 18:20:15
