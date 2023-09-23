//Inicializar el framework express
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//Routers
const egresosRouter = require("./routes/Egresos");
app.use("/egresos", egresosRouter);

const egresosCategoriasRouter = require("./routes/EgresosCategorias");
app.use("/egresos-categorias", egresosCategoriasRouter);

const cuentasRouter = require("./routes/Cuentas");
app.use("/cuentas", cuentasRouter);

const proveedoresRouter = require("./routes/Proveedores");
app.use("/proveedores", proveedoresRouter);

//Definir puerto
//Antes de iniciar la app, sincronizar la base de datos (con las tablas de la carpeta models)
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
