const {argv} = require ('./config/yargs');
const biceApis = require ('./servicios/biceApis');
const exportar = require ('./utilitarios/exportar');

switch (argv._[0]) {
    case 'todos':
        biceApis.getLast ().then((resp) => { 
            
            console.log (resp) 
            exportar.crearArchivo(resp);
        });
    break;
    case 'values':
        let item = argv.item;
        biceApis.getvalueskey (item).then(resp =>{

            console.log (resp);
            exportar.crearArchivo(resp);
        })
    break;
}

