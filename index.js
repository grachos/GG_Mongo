const app = require("./app");
var port = 4000;

const mongo = require("./database");
const rutasdeVehiculos = require("./src/routers/vehiculos.routes");

app.listen(port, ()=>{
    console.log("Salida por el puerto: " + port);
});

app.get('/', (req, res)=>{
    res.send('API trabajando como debe ser!!!');
});

// CONFIGURACION DE RUTAS
app.use("/vehiculos", rutasdeVehiculos);
