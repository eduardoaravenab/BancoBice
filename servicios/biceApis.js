const axios = require('axios');
 
   let getLast = () => {
    return new Promise((resolve, reject)=>{
    axios.get('https://www.indecon.online/last ')
    .then( (response)=> {
      // handle success
      let datos = [];
      for (clave in response.data){
        let fecha = new Date(response.data[clave].date*1000)
        let objeto = {
            fecha:fecha,
            id:response.data[clave].key,
            nombre:response.data[clave].name,
            unidad:response.data[clave].unit,
            valor:response.data[clave].value
        }
        datos.push (objeto)
      }

      resolve (datos)
    })
    .catch(function (error) {
      // handle error
      reject (error)
    })
   
   }
    ) 
    }
    
let getvalueskey = (item) => {
    
    return new Promise ((resolve,rejected)=>{
       
        axios.get(`https://www.indecon.online/values/${item}`).then(resp=>{
           let data = []; 
           let nombre = resp.data.name 
           let unidad = resp.data.unit
           
           for (clave in resp.data.values){
               let fecha = new Date (clave*1000);
               let valor = resp.data[clave] 
               let objeto = {
                nombre:nombre,
                fecha,
                valor,
                unidad
            }
            data.push(objeto)
           }
           


        
        resolve (data)
        })
        .catch(error=>{

            rejected  (error)
        })


    })


}

   module.exports = {
     getLast,
     getvalueskey
  }