const express = require ('express');
const app = express ();


const hbs = require ('hbs');
//configurando hbs como administrador de vista
hbs.registerPartials(__dirname+'/views/parciales');
app.set ('view engine', 'hbs');

require('./helpers/helpers');

//publicando carpeta para acceder
app.use(express.static(__dirname + '/public'));


// Bootstrap 4 y librerías necesarias
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//Libreria Gráficos
app.use('/js', express.static(__dirname + '/node_modules/chart.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/chart.js/dist'));


app.listen (3000,()=>{
    console.log ('server up');
})

app.use (require('./routes/rutas'));
