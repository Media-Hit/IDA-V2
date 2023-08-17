//Inicializar el framework express
const express = require('express');
const app = express();

const db = require('./models');

//Routers
const egresosRouter = require('./routes/Egresos');
app.use("/egresos", egresosRouter);

//Antes de iniciar la app, sincronizar la base de datos (con las tablas de la carpeta models)
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
})
