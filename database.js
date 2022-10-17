const mongo = require("mongoose");

(async ()=> {
    try{
        const db = await mongo.connect("mongodb://localhost:27017/crud_prueba1");
        console.log("Fue realizada la conexión " + db.connection.name);
    }catch(error){
        console.error(error);
    }
})();