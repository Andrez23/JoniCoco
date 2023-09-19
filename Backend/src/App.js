const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require('./database');

const app = express();

app.set("Port", 5000);

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({origin: "*"}));

app.use("/clientes",require('./routes/clientes.route'));
app.use("/producto", require('./routes/producto.route'));
//220
app.use("/usuario", require('./routes/usuario.route'));

app.listen(app.get('Port'), () => { 
    console.log("servidor corriendo por el puerto", 
    app.get('Port'));
 });