-- CREATE TABLE "personas" -------------------------------------
CREATE TABLE `personas`( 
	`id` Int( 255 ) AUTO_INCREMENT NOT NULL,
	`nombre` Int( 255 ) NOT NULL,
	`apellido` Int( 255 ) NOT NULL,
	`email` Int( 255 ) NOT NULL,
	CONSTRAINT `unique_id` UNIQUE( `id` ) )
ENGINE = InnoDB;
-- -------------------------------------------------------------