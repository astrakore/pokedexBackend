// Aquí importamos express y cors

const express = require("express");
const app = express();
const cors = require("cors");

// Este es el puerto donde levantaremos el servidor

const PORT = 3000;

// Router desde el que iremos a los siguientes endpoints

const router = require("./router");

// CORS Y SU CONFIGURACIÓN

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware

app.use(express.json()); // Obtenemos JSON del body
app.use(cors(corsOptions)); // Usamos CORS

app.use(router);

app.listen(3000);