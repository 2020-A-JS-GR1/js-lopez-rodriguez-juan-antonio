const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
const path = './registro.txt';

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
                    menuConsultarColegios();

                    break;
                case '3) Actualizar colegio':
                    console.log('Actualizando colegio');
                    actualizarColegio()
                    break;
                case '4) Eliminar colegio':
                    borrarColegio();
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

    async function menuConsultarColegios() {
        try{
            const menuConsultarColegios = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'seleccion',
                        message: 'Seleccione una opcion',
                        choices: [
                            '1) Consultar TODOS',
                            '2) Consultar un colegios',
                            '3) Atras'

                        ]
                    }
                ]);
            switch (menuConsultarColegios.seleccion) {
                case '1) Consultar TODOS':
                    const respuestaConsultarTodosLosColegios = await consultarTodosLosColegio();
                    console.log(respuestaConsultarTodosLosColegios);
                    menuColegios();
                    break;
                case '2) Consultar un colegios':
                    const respuestaConsultarColegio = await consultarColegio();
                    console.log(respuestaConsultarColegio);
                    menuColegios();
                    break;
                case '3) Atras':
                    menuColegios();
            }
        } catch(e){
            console.error(e);
        }
    }

    menu();

    //crear colegio
    async function crearColegio() {
        try {
            const respuestaCrearColegio = await inquirer
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
            console.log('Nuevo Colegio: ', respuestaCrearColegio);
            const respuestaLeerArchivo= await promesaLeerArchivo(path);
            if (respuestaLeerArchivo !== '') {
                await promesaEscribirColegio(respuestaLeerArchivo + '\n' + JSON.stringify(respuestaCrearColegio));
            } else {
                await promesaEscribirColegio(JSON.stringify(respuestaCrearColegio));
            }
            //console.log('Colegio registrado');
            menuColegios();
        } catch (e) {
            console.error(e);
        }
    }

    //consultar colegio
    async function consultarColegio() {
        try {
            const nombreAConsultar = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'nombreC',
                        message: 'Ingrese el nombre del colegio:'
                    }
                ]);
           // console.log('Consultar colegio: ', nombreAConsultar);
            const colegios = await promesaLeerArchivo(path);
           // console.log(colegios);
            let arrayColegios = [];
            if (colegios !== '') {
                arrayColegios = colegios.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayColegios',arrayColegios);
            }

            if (arrayColegios.length === 0) {
                return 'No hay colegios registrados';
            } else {
                    if (arrayColegios.some(
                            valorActual => {
                                return valorActual.nombreC === nombreAConsultar.nombreC;
                            }
                        )) {
                        return (arrayColegios.filter(
                                    (valorActual) => {
                                        return valorActual.nombreC === nombreAConsultar.nombreC;
                                    }
                                )
                        );
                    } else {
                        return 'No existe el colegio: ' + nombreAConsultar.nombreC;
                    }
            }
        } catch (e) {
            console.error(e);
        }
    }

    async function consultarTodosLosColegio() {
        try {
            const colegios = await promesaLeerArchivo(path);
             //console.log(colegios);
            let arrayColegios = [];
            if (colegios !== '') {
                arrayColegios = colegios.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayColegios',arrayColegios);
            }
            if (arrayColegios.length === 0) {
                return 'No hay colegios registrados';
            } else {
                return (arrayColegios);


            }
        } catch (e) {
            console.error(e);
        }
    }

    async function borrarColegio() {
        try {
            const colegios = await promesaLeerArchivo(path);
            console.log(colegios);
            let arrayColegios = [];
            if (colegios !== '') {
                arrayColegios = colegios.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayColegios',arrayColegios);
            }
            if (arrayColegios.length === 0) {
                return 'No hay colegios registrados';
            } else {
                const respuestaSelecBorrar = await promesaSeleccionarColegio(arrayColegios.map(
                    valorActual => {
                        return valorActual.nombreC;
                    }
                ));
                arrayColegios.splice(arrayColegios.findIndex(
                    valorActual => {
                        return valorActual.nombreC === respuestaSelecBorrar.borrarColegio;
                    }
                ), 1);
                await promesaEscribirColegio(actualizarRegistro(arrayColegios));
            }
            //console.log('Colegio eliminado');
            menuColegios();
        } catch (e) {
            console.error(e);
        }
    }

    async function actualizarColegio(){
        try{
            const colegios = await promesaLeerArchivo(path);
            console.log(colegios);
            let arrayColegios = [];
            if (colegios !== '') {
                arrayColegios = colegios.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
                //console.log('arrayColegios',arrayColegios);
            }
            if (arrayColegios.length === 0) {
                return 'No hay colegios registrados';
            } else {
                const respuestaSelecBorrar = await promesaSeleccionarColegio(arrayColegios.map(
                    valorActual => {
                        return valorActual.nombreC;
                    }
                ));
                arrayColegios.splice(arrayColegios.findIndex(
                    valorActual => {
                        return valorActual.nombreC === respuestaSelecBorrar.borrarColegio;
                    }
                ), 1);
                await promesaEscribirColegio(actualizarRegistro(arrayColegios));
            }
            await crearColegio();
            console.log('Colegio actualizado');
            menuColegios();
        }catch (e) {
            console.error(e);
        }

    }

    const promesaSeleccionarColegio = (colegios) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'borrarColegio',
                message: 'Seleccione el colegio que desea eliminar:',
                choices: colegios,
            });
    }

    const promesaSeleccionarColegioActualizar = (colegios) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'actualizarColegio',
                message: 'Seleccione el colegio que desea eliminar:',
                choices: colegios,
            });
    }


    function actualizarRegistro(arrayColegios) {
        let listaActualizada = '';
        arrayColegios.map(
            (valorActual, indiceActual) => {
                if (indiceActual < arrayColegios.length - 1) {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                } else {
                    listaActualizada = listaActualizada + JSON.stringify(valorActual);
                }

            }
        );
        return listaActualizada;
    }

    const promesaEscribirColegio = (contenidoNuevo) => {
        return new Promise(
            (resolve, reject) => {
                fs.writeFile(
                    path,
                    contenidoNuevo,
                    'utf-8',
                    (error) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve();
                        }
                    }
                );
            }
        );
    }

    const promesaLeerArchivo = (path) => {
        return new Promise(
            (resolve, reject) => {
                fs.readFile(
                    path,
                    'utf-8',
                    (error, contenido) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(contenido);
                        }
                    }
                );
            }
        );
    }

}

main();







