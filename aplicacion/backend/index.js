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


//insertar datos en la base de datos
app.post("/create", (req, res) => {
    const fecha = new Date().toLocaleString();
    const nombreCompleto = req.body.nombreCompleto;
    const puntos = req.body.puntos;
    const res1 = req.body.res1;
    const res2 = req.body.res2;
    const res3 = req.body.res3;
    const res4 = req.body.res4;
    const res5 = req.body.res5;
    const res6 = req.body.res6;
    const res7 = req.body.res7;
    const res8 = req.body.res8;
    const res9 = req.body.res9;
    const res10 = req.body.res10;

    db.query(
        "INSERT INTO historial (fecha, nombreCompleto, puntos, res1, res2, res3, res4, res5, res6, res7, res8, res9, res10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [fecha, nombreCompleto, puntos, res1, res2, res3, res4, res5, res6, res7, res8, res9, res10],
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

app.get("/historial", (req, res) => {
    db.query(
        "SELECT * FROM historial",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/preguntas", (req, res) => {
    db.query(
        "SELECT * FROM preguntas",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});