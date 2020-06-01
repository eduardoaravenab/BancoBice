const fs = require ('fs');

const crearArchivo = (datos)=>{
let nombre = new Date ().getTime ();
let ruta = 'archivos/'+nombre+'.txt';
fs.writeFile (ruta,JSON.stringify(datos),(error)=>{

    if (error){
        console.log (error);
    }

})
}

module.exports = {
    crearArchivo
 }