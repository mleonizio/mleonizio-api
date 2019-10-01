const mongoose = require("mongoose");
const express = require("express");
const requireDir = require("require-dir");

//Iniciando o APP
const app = express();
app.use(express.json());

//BD
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

//Rota
app.use("/api", require("./src/routes"));

app.listen(3001);
