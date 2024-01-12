const Auto = require("../models/Auto.model.js");

const ingresarAuto = async (req, res) => {
  try {
    const { nombre, año, color, modelo } = req.body;

    const auto = await Auto.ingresarAuto({ nombre, año, color, modelo });

    console.log("Auto guardado exitosamente");
    res.status(201).json({ message: "Auto guardado exitosamente" });
  } catch (error) {
    console.error("Error al ingresar el auto: ", error.message);

    let statusCode = 500;
    let errorMessage = "Error interno del servidor";

    res.status(statusCode).json({ error: errorMessage });
  }
};

const eliminarAuto = async (req, res) => {
  const { id_auto } = req.params;
  try {
    const auto = await Auto.eliminarAuto(id_auto);

    if (!auto || auto.length == 0) {
      return res
        .status(404)
        .json({ error: "Auto no encontrado para eliminar :(" });
    }
    return res.status(200).json({ message: "Eliminado correctamente" });
  } catch (error) {
    console.log("Error al eliminar el auto", error.message);
    res.status(500).json({ error: "Error al eliminar el Auto" });
  }
};
const actualizarAuto = async (req, res) => {
  const { id_auto } = req.params;

  try {
    const { nombre, año, color, modelo } = req.body;

    const resultadoActualizacion = await Auto.actualizarAuto(
      id_auto,
      nombre,
      año,
      color,
      modelo
    );

    if (resultadoActualizacion && resultadoActualizacion.message) {
      return res.status(200).json({ message: "Actualizado correctamente" });
    } else {
      return res
        .status(404)
        .json({ error: "Auto no encontrado para actualizar :(" });
    }
  } catch (error) {
    console.error("Error al actualizar el auto:", error.message);
    res.status(500).json({ error: "Error al actualizar el Auto" });
  }
};

const obtenerAuto = async (req, res) => {
  const { id_auto } = req.params;

  try {
    const auto = await Auto.obtenerAuto(id_auto);

    if (!auto || auto.length === 0) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }
    res.json(auto);
  } catch (error) {
    console.log("Error al obtener el Auto CONTROLLER: ", error.message);
    res.status(500).json({ error: "Error al obtener el Auto" });
  }
};

module.exports = {
  ingresarAuto,
  actualizarAuto,
  eliminarAuto,
  obtenerAuto,
};
