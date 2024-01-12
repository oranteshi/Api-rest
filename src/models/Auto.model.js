require("dotenv").config();
const connection = require("../config/db.config");

class Auto {
  static async ingresarAuto({ nombre, año, color, modelo }) {
    try {
      const query = `
            INSERT INTO auto (nombre, año, color, modelo)
            VALUES (?, ?, ?, ?)
          `;

      const result = await connection.query(query, [
        nombre,
        año,
        color,
        modelo,
      ]);
    } catch (error) {
      throw new Error(`Error al insertar el auto: ${error.message}`);
    }
  }

  static async eliminarAuto(id_auto) {
    try {
      const query = `delete from auto
        where id_auto =?`;
      const [autosRows] = await connection.query(query, [id_auto]);
      return autosRows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async obtenerAuto(id_auto) {
    try {
      const query = `
          SELECT * FROM auto where id_auto=?
          `;
      const [autosRows] = await connection.query(query, [id_auto]);

      return autosRows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async actualizarAuto(id_auto, nombre, año, color, modelo) {
    try {
      const query = `
          UPDATE auto
          SET nombre = ?, año = ?, color = ?, modelo = ?
          WHERE id_auto = ?
        `;

      const result = await connection.query(query, [
        nombre,
        año,
        color,
        modelo,
        id_auto,
      ]);
      console.log(result);
      return { message: "Auto actualizado exitosamente" };
    } catch (error) {
      throw new Error(`Error al actualizar el auto: ${error.message}`);
    }
  }
}

module.exports = Auto;
