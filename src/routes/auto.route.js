const express = require("express");
const autoRoute = express.Router();
const auto = require("../controllers/auto.controller.js");

autoRoute.post("/auto", auto.ingresarAuto);
autoRoute.delete("/auto/:id_auto", auto.eliminarAuto);
autoRoute.put("/auto/:id_auto", auto.actualizarAuto);
autoRoute.get("/auto/:id_auto", auto.obtenerAuto);

module.exports = autoRoute;
