
const hbs = require('hbs');
 
hbs.registerHelper('mayusculas', (texto) => {
 
return texto.toUpperCase();
 
});

