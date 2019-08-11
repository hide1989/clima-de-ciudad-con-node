                                        //recibe un objeto
const argv= require("yargs").options({  //.options se usa para recivir directamente el comando
    direccion:{
        alias:"d",
        desc: "Direccion de la ciudad para el clima",
        demand: true
    }
}).argv;


module.exports={
    argv:argv
}


