const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

//seccion de la base de datos
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'preguntados'
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    db.query(
        "INSERT INTO usuario (nombre, apellido) VALUES (?,?)",
        [nombre, apellido],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Valores insertados");
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Servidor iniciado en el puerto 3001");
});

app.get("/usuario", (req, res) => {
    db.query(
        "SELECT * FROM usuario",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});