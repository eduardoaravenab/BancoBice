// Transforma de milisegundos a fecha DD-MM-YYYY HH:MM:SS
const formatFecha = (fecha) => {
 
    let resp = new Date(fecha).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    return resp.split(' ')[0];
 
}
 
module.exports = {
    formatFecha
}