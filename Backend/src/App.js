const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require('./database');

const app = express();
//configurando o asignando un puerto para nuestro servidor
app.set("Port", 4000);
//el morgan nos sirve para saber que tipo de dato de peticiones esta recibiendo nuestro servidor
app.use(morgan("dev"));
//express json, nos sirve para convertir los datos en objetos json y leerlos 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//cors nos sirve para permitir conexiones desde cualquier cliente
app.use(cors({ origin: "*" }));




app.listen(app.get(`Port`), () => { console.log(`servidor corriendo por el puerto`, app.get(`Port`)); });