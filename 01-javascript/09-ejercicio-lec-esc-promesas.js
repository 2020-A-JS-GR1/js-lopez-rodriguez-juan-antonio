const fs = require('fs');

/*
Hacer una función que reciba el path y el contenido nuevo de un archvo.
Leer archivo, escribir al final y volver a leer
Utilizar Promesas
fs.readFile (path, codificación, callback (error, contenido))
fs.writeFile (path,contenido, codificación, callback(error))
*/
function promesaLeerArchivo(path) {
    const promesaLectura = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        console.log('error al leer\n', error);
                        reject(error);
                    } else {
                        console.log(contenido + '\n');
                        resolve(contenido);
                    }
                });
        }
    );
    return promesaLectura;
}

function promesaEscribirArchivo(path, contenido, contenidoNuevo) {
    const promesaEscritura = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenido + '\n' + contenidoNuevo,
                'utf-8',
                error => {
                    if (error) {
                        console.log('error al escribir\n', error);
                        reject(error);
                    } else {
                        resolve('Fin escritura\n');
                    }
                });
        }
    );
    return promesaEscritura;
}

function ejercicio(path, contenidoNuevo) {
    promesaLeerArchivo(path)
        .then(
            (contenido) => {
                return promesaEscribirArchivo(path, contenido, contenidoNuevo)
            }
        )
        .then(
            (respuesta) => {
                console.log(respuesta)
                promesaLeerArchivo(path)
            }
        )
        .catch(
            (error) => {
                console.error('Contenido catch', error)
            }
        )
}


ejercicio('./06-ejemplo.js.txt', 'Promesa')
