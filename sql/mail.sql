DROP DATABASE IF EXISTS `mail`;
CREATE DATABASE `mail`; 
USE `mail`;
SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;
CREATE TABLE `person` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `person` VALUES (1,'john@example.com');
INSERT INTO `person` VALUES (2,' bob@example.com');
INSERT INTO `person` VALUES (3,' john@example.com');
with my_cte as(
select EMAIL, MIN(ID) as id_to_keep
from
person
group by EMAIL
)
delete from person
where id not in (select id_to_keep from my_cte)