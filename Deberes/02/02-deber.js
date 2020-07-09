const fs = require('fs');
const pathArchivo = './01-ejemplo.txt'
const contenidoNuevo = 'Buenos dias Hola x2'

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

async function ejercicio(path, contenidoAgregar) {
    console.log('1');
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo(path);
        console.log('ContenidoArchivoActual:' + '\n',contenidoArchivoActual)
        console.log('\n' + '3 Escritura de archivo');
        await promesaEscribirArchivo(path, contenidoArchivoActual, contenidoAgregar);
        console.log('4 Fin Escritura de archivo'+ '\n');
        await promesaLeerArchivo(path);
        console.log('5');

    }catch (error) {
        console.error(error);
    }
    console.log('6');
    console.log('7');
}

ejercicio(pathArchivo, contenidoNuevo);






