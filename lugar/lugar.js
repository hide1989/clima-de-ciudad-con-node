
const axios = require('axios');


const getLugarLatLon= async (dir) =>{

    const lugar= encodeURI(dir); //encodeURI() convierte caracteres especiales en caracteres seguros reconocibles 
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${lugar}`,
        headers: {'X-RapidAPI-Key': '63ce55b925msh66d2e32982b1d1cp15f1fcjsn2773f83321c2'}
      });
    
    const respuesta= await instance.get()

    if(respuesta.data.Results.length === 0 || respuesta=== undefined){
        throw new Error(`no hay resultados para ${dir}`);
    }

    const data= respuesta.data.Results[0];
    const direccion= data.name;
    const lat= data.lat;
    const lon= data.lon;

           
    return {
        direccion,
        lat,
        lon
    }
}

module.exports={
    getLugarLatLon: getLugarLatLon
}


