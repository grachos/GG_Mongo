const usuariosModel = require("../models/usuarios");
const jwt = require("jsonwebtoken");

const usuarioSave = async (req, res)=>{
    try {
        const {email} = req.body;
        var usuario = await usuariosModel.findOne({email});
              
        if (usuario){
            return res.status(400).json({msg:"Usuario existe"});
        }
        else{
            usuario = new usuariosModel(req.body); 
            await usuario.save(); 
            return res.status(200).json({msg:"Usuario creado"});
        }
       
        
        const payload = {
            usuario: { id: usuario.id },
        };
            
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
            expiresIn: 3600, //1 hora
            },
            (error, token) => {
            if (error) throw error;
            
            //Mensaje de confirmación
            res.json({ token });
            }
        );
     return res.status(200).json({msg: "Usuario guardo correstamente"});       
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    usuarioSave
}