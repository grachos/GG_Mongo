const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema(
    {
         placa: {
            type: String,
            require: true,
            unique: true
        },
        marca: {
            type: String,
            require: true,
        },
        modelo : {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const vehiculos = new mongoose.model("vehiculos", vehiculoSchema);
module.exports = vehiculos;
