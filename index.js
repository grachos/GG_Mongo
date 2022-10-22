const app = require("./app");
const cors = require("cors");

var port = 4000;

const mongo = require("./database");
const rutasdeVehiculos = require("./src/routers/vehiculos.routes");
const rutasUsuarios = require("./src/routers/usuarios.routes");


app.use(cors());
app.listen(port, ()=>{
    console.log("Salida por el puerto: " + port);
});

// CONFIGURACION DE RUTAS
app.use("/vehiculos", rutasdeVehiculos);
app.use("/usuarios", rutasUsuarios);

app.get('/', (req, res)=>{
    res.send('API trabajando como debe ser!!!');
});