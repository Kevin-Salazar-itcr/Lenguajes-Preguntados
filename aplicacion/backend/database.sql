create database preguntados;
use preguntados;

-- tuve problemas con la autenticacion de mysql, asi que actualice el super usuario
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
-- --------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------
create table preguntas(
	id int auto_increment primary key,
    pregunta varchar(100),
    op1 varchar(50),
    op2 varchar(50),
    op3 varchar(50),
    respuesta varchar(50)
);
-- --------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------
create table historial(
	id int auto_increment primary key,
    fecha varchar(100),
    nombreCompleto varchar(50),
    puntos int,
    res1 varchar(50),
    res2 varchar(50),
    res3 varchar(50),
    res4 varchar(50),
    res5 varchar(50),
    res6 varchar(50),
    res7 varchar(50),
    res8 varchar(50),
    res9 varchar(50),
    res10 varchar(50)
);
delete from historial;
ALTER TABLE historial AUTO_INCREMENT = 1;
-- --------------------------------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------------------------------
-- insercion de las 10 preguntas
INSERT INTO preguntas (pregunta, op1, op2, op3, respuesta) VALUES
('¿Cuál es la capital de Francia?', 'Londres', 'París', 'Roma', 'París'),
('¿Cuál es el río más largo del mundo?', 'Nilo', 'Amazonas', 'Yangtsé', 'Nilo'),
('¿Cuál es el animal nacional de los Estados Unidos?', 'Oso grizzly', 'Bisonte', 'Águila calva', 'Águila calva'),
('¿Cuál es la montaña más alta del mundo?', 'Everest', 'K2', 'Kangchenjunga', 'Everest'),
('¿Cuál es el país más poblado del mundo?', 'India', 'China', 'Estados Unidos', 'China'),
('¿Cuál es el idioma más hablado del mundo?', 'Español', 'Inglés', 'Mandarín', 'Mandarín'),
('¿Cuál es la moneda más utilizada del mundo?', 'Euro', 'Dólar estadounidense', 'Yen japonés', 'Dólar estadounidense'),
('¿Cuál es el continente más grande del mundo?', 'Antártida', 'Asia', 'África', 'Asia'),
('¿Cuál es el océano más grande del mundo?', 'Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Pacífico'),
('¿Cuál es el clima más común del mundo?', 'Tropical', 'Polar', 'Templado', 'Templado');
-- -------------------------------------------------------------------------------