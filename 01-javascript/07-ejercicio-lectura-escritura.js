const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido del archivo.
La funcion debe tomar estos dos parametros y leer el archivo y aniadir el texto al final
del archivo
*/

// mi solucion
/*
function escribirArchivo(path, contenidoNuevo) {
    //fs.readFile(path, codificacion, callback(error,contenido));

    fs.readFile(path, 'utf-8', (error, contenido) =>{
        if(error){
            console.log('Hubo error', error);
        }else{
            console.log(contenido)

            //fs.writeFile(path, contenido, codificacion, callback(error));
            fs.writeFile(path, contenido +'\n' + contenidoNuevo, 'utf-8', (error)=> {
                    if (error) {
                        console.log('Hubo error', error);
                    } else {
                        console.log("escrito")
                    }
                }
            );
        }
    });
}
*/


//Solucion del inge
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(path, 'utf-8', (error, contenidoLeido) =>{
        if(error){
            console.log('Hubo error', error);
        }else{
            fs.writeFile(path, contenidoNuevo +'\n' + contenidoLeido, 'utf-8', (error)=> {
                    if (error) {
                        console.log('Hubo error', error);
                    } else {
                        console.log("escrito")
                    }
                }
            );
        }
    });


}

escribirArchivo('./06-ejemplo.js.txt','Buenas Tardes mio')







