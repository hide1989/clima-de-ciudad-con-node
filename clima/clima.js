const axios = require('axios');

const getClima= async (lat, lon) =>{

    const respuesta= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8da1282cc42f874b0407aa9fc284078&units=Metric`)
    

    if(respuesta.data.main.temp === undefined){
        throw new Error(`no hay resultados para latitud: ${lat} y longitud ${lon} `);
    }

    const temperatura=respuesta.data.main.temp;
    

           
    return temperatura;
}

module.exports={
    getClima: getClima
}