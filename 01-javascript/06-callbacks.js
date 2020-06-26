const fs = require('fs');

console.log('Primero'); //SINCRONO

fs.readFile( //ASINCRONO
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido)=>{  //CALLBACK
        console.log('Segundo');
        if(error){
            console.log('Hubo error', error);
        }else{
            console.log(contenido)
        }
    }
);

console.log('Final');



