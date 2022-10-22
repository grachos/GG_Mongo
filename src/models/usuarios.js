const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        passwd : {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const usuarios = new mongoose.model("usuarios", usuarioSchema);
module.exports = usuarios;
