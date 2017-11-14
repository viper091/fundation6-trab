-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: trabdb
-- ------------------------------------------------------
-- Server version	5.7.18-log

create database trabdb;
use trabdb;


CREATE TABLE `airplanes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `origem` varchar(50) NOT NULL,
  `img` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  info varchar(5000) not null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
