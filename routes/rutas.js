const express = require ('express');
const app = express();
const biceApis = require ('../servicios/biceApis');

app.get('/',(req,res)=>{

    biceApis.getLast()
    .then((resp)=>{
        res.render('home',{
            datos:resp
        });  
    });
})

app.get('/detalles-item/:item',(req,res)=>{

        let item =req.params.item;
        biceApis.getvalueskey(item)
        .then((resp)=>{
            res.render('detalles',{
                datos:resp,
                nombre:item,
                unidad:resp[0].unidad
            });  
        });
});

module.exports =app;