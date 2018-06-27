-- Adminer 4.6.2 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE TABLE `person` (
  `idperson` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idperson`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2018-06-27 12:00:33
