const app = require("./app");
var port = 4000;

const mongo = require("./database");
const rutasdeVehiculos = require("./src/routers/vehiculos.routes");

app.listen(port, ()=>{
    console.log("Salida por el puerto: " + port);
});

app.get('/', (req, res)=>{
    res.send('API en funcionamiento!!!');
});

// CONFIGURACION DE RUTAS
app.use("/vehiculos", rutasdeVehiculos);
