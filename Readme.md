##Aplicación consola Banco Bice##

1- Al descargar el proyecto, se debe ejecutar el comando npm install

2- La aplicación se ejecuta de la siguiente manera

    (a) node app todos
        El comando todos ejecuta el servicio last y genera un archivo con la respuesta

    (b) node app values --item "elemento"
        El comando values --item "elemento" ejecuta el servicio filtrando por el campo que se envía en el valor elemento.
        Los elementos que acepta son: cobre|dolar|euro|ipc|ivp|oro|plata|uf|utm|yen
