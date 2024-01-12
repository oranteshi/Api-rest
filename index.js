require("dotenv").config();
const express = require("express");
const cors = require("cors");
const autoRouter = require("./src/routes/auto.route.js");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(autoRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
