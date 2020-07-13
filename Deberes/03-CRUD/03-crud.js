const inquirer = require('inquirer');
const fs = require('fs');

async function main() {

    //menu
    async function menu() {
     try{
         const menu = await inquirer
             .prompt([
                 {
                     type: 'list',
                     name: 'seleccion1',
                     message: 'Seleccione una opcion',
                     choices: ['Colegios', 'Profesores']
                 },
             ]);
        // console.log(menu);
        switch (menu.seleccion1) {
            case 'Colegios':
                menuColegios();
                break;
            case 'Profesores':
                menuProfesores();
                break;
        }
     } catch(e){
         console.error(e);
     }
    }

    async function menuColegios() {
        try{
            const menu2colegios = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Crear colegio',
                            '2) Consultar colegios',
                            '3) Actualizar colegio',
                            '4) Eliminar colegio',
                            '5) Atras'
                        ]
                    }
                ]);
            //console.log(menu2colegios);
            switch (menu2colegios.seleccion2) {
                case '1) Crear colegio':
                    crearColegio();
                    console.log('Creando colegio');
                    break;
                case '2) Consultar colegios':
                    //consultarColegio();
                    console.log('Consultando colegio');
                    leerArchivo('./registro.json');

                    break;
                case '3) Actualizar colegios':
                    //actualizarColegio();
                    console.log('Actualizar colegio');
                    break;
                case '4) Eliminar colegios':
                    //eliminarColegio();
                    console.log('Eliminar colegio');
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    async function menuProfesores() {
        try{
            const menu2profesores= await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion2',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Crear profesor',
                            '2) Consultar profesor',
                            '3) Actualizar profesor',
                            '4) Eliminar profesor',
                            '5) Atras']
                    }
                ]);
            //console.log(menu2profesores);
            switch (menu2profesores.seleccion2) {
                case '1) Crear profesor':
                    //crearProfesor();
                    console.log('Creando profesor');
                    break;
                case '2) Consultar profesor':
                    //consultarProfesor();
                    console.log('Consultando profesor');
                    break;
                case '3) Actualizar profesor':
                    //actualizarProfesor();
                    console.log('Actualizar profesor');
                    break;
                case '4) Eliminar profesor':
                    //eliminarProfesor();
                    console.log('Eliminar profesor');
                    break;
                case '5) Atras':
                    menu();
            }
        } catch(e){
            console.error(e);
        }
    }

    menu();

    //create colegio
    async function crearColegio() {
        try {
            const respuesta = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreC',
                        message: 'Ingresa el nombre del colegio:'
                    },
                    {
                        type: 'input',
                        name: 'direccion',
                        message: 'Ingresa la direccion:'
                    },
                    {
                        type: 'input',
                        name: 'aforo',
                        message: 'Ingresa el aforo:'
                    }
                ]);
//            console.log('Respuesta', respuesta);

            const arrayColegios JSON.parse(leerArchivo('./registro.json'));
            const nuevoColegio = {'nombre': respuesta.nombreC, 'direccion': respuesta.direccion, 'aforo': respuesta.aforo};
            console.log('lectura: ', arrayColegios)
            arrayColegios.push(nuevoColegio);
            const jsonColegios = {'colegios': arrayColegios}
            console.log(JSON.stringify(arrayColegios));

            //escribirArchivo('./registro.json', JSON.stringify(jsonColegios))


        } catch (e) {
            console.error(e);
        }
    }


    async function escribirArchivo(path, contenidoNuevo) {
        fs.readFile(path, 'utf-8', (error, contenidoLeido) =>{
            if(error){
                console.log('Hubo error', error);
            }else{
                fs.writeFile(path, contenidoLeido +'\n' + contenidoNuevo, 'utf-8', (error)=> {
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

    function leerArchivo(path) {
        fs.readFile(path, 'utf-8', (error, contenidoLeido) =>{
            if(error){
                console.log('Hubo error', error);
            }else{
                //console.log(contenidoLeido);
                return console.log(JSON.parse(contenidoLeido).colegios);
                //return JSON.parse(contenidoLeido).colegios;
            }
        });
    }

}

main();








