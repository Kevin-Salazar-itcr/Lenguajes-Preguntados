create database preguntados;
use preguntados;

create table usuario(
	id int AUTO_INCREMENT primary key,
    nombre varchar(20),
    apellido varchar(20)
);

select * from usuario;
-- las 2 lineas de abajo se corren juntas
delete from usuario;
ALTER TABLE usuario AUTO_INCREMENT = 1;

-- -------------------------------------------------------------------------------
-- tuve problemas con la autenticacion de mysql, asi que actualice el super usuario
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
-- -------------------------------------------------------------------------------
