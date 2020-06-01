let argv = require ('yargs')
.command ('todos','muestra todos los elementos',{})
.command ('values','muestra todos los valores para un elemento',{
    item:{
        alias:'i',
        demand: true,
        desc:'nombre del elemento'
    }


})
.help().argv;

module.exports = {
    argv:argv
}

