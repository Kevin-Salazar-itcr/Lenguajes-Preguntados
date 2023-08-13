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
    respuesta varchar(50),
    dato varchar(500)
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
INSERT INTO preguntas (pregunta, op1, op2, op3, respuesta, dato) VALUES
('¿Cuál es la capital de Francia?', 'Londres', 'París', 'Roma', 'París', '¿Sabías que la Torre Eiffel fue construida para la Exposición Universal de 1889? Se suponía que sería una estructura temporal, pero se mantuvo.'),
('¿Cuál es el río más largo del mundo?', 'Nilo', 'Amazonas', 'Yangtsé', 'Nilo', '¿Sabías que el río Nilo es el río más largo del mundo? Se extiende por más de 6,600 kilómetros y atraviesa 11 países.'),
('¿Cuál es el animal nacional de los Estados Unidos?', 'Oso grizzly', 'Bisonte', 'Águila calva', 'Águila calva', '¿Sabías que el águila calva es el único ave rapaz que aparece en el sello nacional de Estados Unidos? Está representada con una flecha y una rama de olivo en sus garras, que simbolizan la fuerza y la paz.'),
('¿Cuál es la montaña más alta del mundo?', 'Everest', 'K2', 'Kangchenjunga', 'Everest', '¿Sabías que el Monte Everest está creciendo a un ritmo de aproximadamente 4 milímetros por año? Esto se debe a que la placa tectónica de la India está chocando con la placa tectónica de Eurasia.'),
('¿Cuál es el país más poblado del mundo?', 'India', 'China', 'Estados Unidos', 'China', '¿Sabías que China tiene la población más grande del mundo? Con más de 1.400 millones de habitantes, representa más del 18% de la población mundial.'),
('¿Cuál es el idioma más hablado del mundo?', 'Español', 'Inglés', 'Mandarín', 'Mandarín', '¿Sabías que el mandarín es el idioma más hablado del mundo? Lo hablan más de 1.100 millones de personas, principalmente en China, Taiwán, Singapur y Malasia.'),
('¿Cuál es la moneda más utilizada del mundo?', 'Euro', 'Dólar estadounidense', 'Yen japonés', 'Dólar estadounidense', '¿Sabías que el dólar estadounidense es la moneda más utilizada en el mundo? Se utiliza en más de 100 países y representa más del 60% de las transacciones comerciales mundiales.'),
('¿Cuál es el continente más grande del mundo?', 'Antártida', 'Asia', 'África', 'Asia', '¿Sabías que Asia es el hogar de la mayoría de las religiones del mundo, incluyendo el budismo, el hinduismo, el islam, el judaísmo y el cristianismo?'),
('¿Cuál es el océano más grande del mundo?', 'Océano Pacífico', 'Océano Índico', 'Océano Atlántico', 'Océano Pacífico', '¿Sabías que el Océano Pacífico es el hogar de más de 25,000 islas, más que cualquier otro océano del mundo?'),
('¿Cuál es el clima más común del mundo?', 'Tropical', 'Polar', 'Templado', 'Templado', '¿Sabías que el clima templado es el clima ideal para el crecimiento de una variedad de plantas y árboles, como árboles de hoja caduca, pinos, abetos y robles? Esto se debe a que las temperaturas son suaves y las precipitaciones son regulares.');
-- -------------------------------------------------------------------------------