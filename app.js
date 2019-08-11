const argv= require("./config/yargs.js").argv;

const lugar= require("./lugar/lugar");

const clima= require("./clima/clima")

/* lugar.getLugarLatLon(argv.direccion)
    .then((resp)=>{console.log(resp)})
    .catch((err)=>{console.log(err.message)});

clima.getClima(8.660000, -75.919998)
      .then((resp) =>{console.log(resp)})
      .catch((err)=>{console.log(err)});
 */
const getInfo= async (direccion)=>{

    const coordenadas= await lugar.getLugarLatLon(direccion);

    if(!coordenadas) throw new Error(`No se pudo determinar el clima de ${direccion}`);

    const temperatura= await clima.getClima(coordenadas.lat, coordenadas.lon);

    if(!temperatura) throw new Error(`No se pudo determinar el clima de las coordenadas`);

    const sitio= coordenadas.direccion;
    const temp= temperatura;

    return{
        sitio,
        temp
    }

}

getInfo(argv.direccion)
        .then((resp)=>{console.log(`el clima de ${resp.sitio} es de ${resp.temp}`)})
        .catch((err)=>{console.log(err.message)});
