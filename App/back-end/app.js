'use strict'

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const swaggerUiExpress = require("swagger-ui-express");

const swaggerDocument = require("./swagger.json");
const iot = require("./routes/iot.route");
const config = require("./config/config")();


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin: `http://${config.server.ip}:3000` }))
app.use('/api', iot);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

app.use(function (req, res, next) {
  res.status(404).send({ error: 'Not found' })
});


module.exports = app;
