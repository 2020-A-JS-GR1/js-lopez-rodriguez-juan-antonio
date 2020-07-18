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
                    await crearProfesor();
                    break;
                case '2) Consultar profesor':
                    await mostrarProfesor();
                    break;
                case '3) Actualizar profesor':
                    //actualizarProfesor();
                    console.log('Actualizar profesor');
                    break;
                case '4) Eliminar profesor':
                    //eliminarProfesor();
                    console.log('Eliminar profesor');
                    eliminarProfesor();
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

    //Funciones para CRUD
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
                    },
                    {
                        type: 'input',
                        name: 'bachilleratoUnificado',
                        message: 'Tiene bachillerato unificado?(S/N):'
                    },
                    {
                        type: 'input',
                        name: 'licencia',
                        message: 'Tiene licencia del ministerio?(S/N):'
                    }

                ]);
            console.log('Nuevo Colegio: ', respuestaCrearColegio);
            const boolBachilleratoUnificado = (/S/i).test(respuestaCrearColegio.bachilleratoUnificado)
            const boolLicencia = (/S/i).test(respuestaCrearColegio.licencia)
            const respuestaCrearColegioTypado = {
                nombreC: respuestaCrearColegio.nombreC,
                direccion: respuestaCrearColegio.direccion,
                aforo: parseInt(respuestaCrearColegio.aforo),
                boolBachilleratoUnificado: boolBachilleratoUnificado,
                licencia: boolLicencia,
                profesores: []
            }
            const respuestaLeerArchivo= await promesaLeerArchivo(path);
            if (respuestaLeerArchivo !== '') {
                await promesaEscribirColegio(respuestaLeerArchivo + '\n' + JSON.stringify(respuestaCrearColegioTypado));
            } else {
                await promesaEscribirColegio(JSON.stringify(respuestaCrearColegioTypado));
            }
            //console.log('Colegio registrado');
            menuColegios();
        } catch (e) {
            console.error(e);
        }
    }

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
                message: 'Seleccione el colegio:',
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

    const promesaSeleccionarColegioParaCrearProfesor = (colegios) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'crearProfesorEnColegio',
                message: 'Seleccione el colegio al que pertenece el profesor:',
                choices: colegios,
            });
    }

    const promesaSeleccionarProfesorEliminar = (profesores) => {
        return inquirer
            .prompt({
                type: 'list',
                name: 'eliminarProfesor',
                message: 'Seleccione el profesor al que desea eliminar:',
                choices: profesores,
            });
    }

    async function crearProfesor() {
        try {

            const todosColegios = await promesaLeerArchivo(path);
            //console.log('colegios',todosColegios);
            let arrayColegios = [];
            if (todosColegios.length === 0) {
                console.log('No hay colegios registrados');
            } else {
            if (todosColegios !== '') {
                arrayColegios = todosColegios.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    });
                //console.log('arrayColegios',arrayColegios);

                const respuestaSelecCrearProfesor = await promesaSeleccionarColegioParaCrearProfesor(arrayColegios.map(
                    valorActual => {
                        return valorActual.nombreC;
                    }
                ));
                // console.log('respuestaSelecCrearProfesor',respuestaSelecCrearProfesor)
                const colegios = arrayColegios.splice(arrayColegios.findIndex(
                    valorActual => {
                        //console.log('valorActual',valorActual)
                        if (valorActual.nombreC === respuestaSelecCrearProfesor.crearProfesorEnColegio) {
                            return valorActual;
                        }
                    }
                ), 1);
                await promesaEscribirColegio(actualizarRegistro(arrayColegios));
                const colegio = colegios[0];

                const respuestaCrearProfesor = await inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'nombreP',
                            message: 'Ingresa el nombre del profesor:'
                        },
                        {
                            type: 'input',
                            name: 'especialidad',
                            message: 'Ingresa la especialidad:'
                        },
                        {
                            type: 'input',
                            name: 'edad',
                            message: 'Ingresa la edad:'
                        },
                        {
                            type: 'input',
                            name: 'casado',
                            message: 'Es casado?(S/N):'
                        },
                        {
                            type: 'input',
                            name: 'doctorado',
                            message: 'Tiene doctorado?(S/N):'
                        }

                    ]);
               // console.log('Nuevo Profesor: ', respuestaCrearProfesor);
                const boolCasado = (/S/i).test(respuestaCrearProfesor.casado);
                const boolDoctorado = (/S/i).test(respuestaCrearProfesor.doctorado);
                const respuestaCrearProfesorTypado = {
                    nombreP: respuestaCrearProfesor.nombreP,
                    especialidad: respuestaCrearProfesor.especialidad,
                    edad: parseInt(respuestaCrearProfesor.edad),
                    casado: boolCasado,
                    doctorado: boolDoctorado
                }


                colegio.profesores.push(respuestaCrearProfesorTypado);



                //      colegio.profesores = respuestaCrearProfesorTypado;
//                console.log('colegioProfesores', colegio)

                const respuestaLeerArchivo = await promesaLeerArchivo(path);
                if (respuestaLeerArchivo !== '') {
                    await promesaEscribirColegio(respuestaLeerArchivo + '\n' + JSON.stringify(colegio));
                } else {
                    await promesaEscribirColegio(JSON.stringify(colegio));
                }

                //console.log('Colegio registrado');
                //menuColegios();


            }
            }
            menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function eliminarProfesor(){
        try {
            const todosColegios = await promesaLeerArchivo(path);
            //console.log('colegios',todosColegios);
            let arrayColegios = [];
            if (todosColegios.length === 0) {
                console.log('No hay colegios registrados');
            } else {
                if (todosColegios !== '') {
                    arrayColegios = todosColegios.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayColegios',arrayColegios);

                    const respuestaSelecEliminarProfesor = await promesaSeleccionarColegioParaCrearProfesor(arrayColegios.map(
                        valorActual => {
                            return valorActual.nombreC;
                        }
                    ));
                    // console.log('respuestaSelecCrearProfesor',respuestaSelecEliminarProfesor)
                    const colegios = arrayColegios.splice(arrayColegios.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreC === respuestaSelecEliminarProfesor.crearProfesorEnColegio) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    await promesaEscribirColegio(actualizarRegistro(arrayColegios));
                    const colegio = colegios[0];
                    //console.log('profesores',JSON.stringify(colegio))
//                    console.log('profesores',JSON.stringify(colegio.profesores));
                    const arrayProfesores =  JSON.stringify(colegio.profesores);
                    console.log('colegio', colegio);
                    console.log('arrayProfesores', arrayProfesores);

                    const menuEliminarProfesores= await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'seleccionProfesorEliminar',
                                message: 'Ingrese el profesor que desea eliminar',
                            }
                        ]);
                    const profesorEliminar = await menuEliminarProfesores;
                    //console.log('profesorEliminar >>>> ',profesorEliminar.seleccionProfesorEliminar);

                    const eliminarProfesorDelArray = (indice, arreglo) => {
                        arreglo.splice(indice, 1);
                    }

                    const arrayArrayProfesores = JSON.parse(arrayProfesores);
                    //console.log('ELIMINAR', profesorEliminar )
                    eliminarProfesorDelArray(profesorEliminar , arrayArrayProfesores);
                    //console.log( 'arrayProfesores',arrayArrayProfesores );
                    //console.log('colegio',JSON.stringify(colegio))
                    const colegioProfesorEliminado = {
                        nombreC: colegio.nombreC,
                        direccion: colegio.direccion,
                        aforo: colegio.aforo,
                        boolBachilleratoUnificado: colegio.boolBachilleratoUnificado,
                        licencia: colegio.licencia,
                        profesores: arrayArrayProfesores
                    }
                    //console.log('colegioProfesorEliminado >>>> ',colegioProfesorEliminado)
                    const respuestaLeerArchivo = await promesaLeerArchivo(path);
                    if (respuestaLeerArchivo !== '') {
                        await promesaEscribirColegio(respuestaLeerArchivo + '\n' + JSON.stringify(colegioProfesorEliminado));
                    } else {
                        await promesaEscribirColegio(JSON.stringify(colegioProfesorEliminado));
                    }
                }
            }
            menu();

        } catch (e) {
            console.error(e);
        }
    }

    async function mostrarProfesor(){
        try {
            const todosColegios = await promesaLeerArchivo(path);
            //console.log('colegios',todosColegios);
            let arrayColegios = [];
            if (todosColegios.length === 0) {
                console.log('No hay colegios registrados');
            } else {
                if (todosColegios !== '') {
                    arrayColegios = todosColegios.split('\n').map(
                        valorActual => {
                            return JSON.parse(valorActual);
                        });
                    //console.log('arrayColegios',arrayColegios);

                    const respuestaSelecEliminarProfesor = await promesaSeleccionarColegioParaCrearProfesor(arrayColegios.map(
                        valorActual => {
                            return valorActual.nombreC;
                        }
                    ));
                    // console.log('respuestaSelecCrearProfesor',respuestaSelecEliminarProfesor)
                    const colegios = arrayColegios.splice(arrayColegios.findIndex(
                        valorActual => {
                            //console.log('valorActual',valorActual)
                            if (valorActual.nombreC === respuestaSelecEliminarProfesor.crearProfesorEnColegio) {
                                return valorActual;
                            }
                        }
                    ), 1);
                    //await promesaEscribirColegio(actualizarRegistro(arrayColegios));
                    const colegio = colegios[0];
                    //console.log('profesores',JSON.stringify(colegio))
//                    console.log('profesores',JSON.stringify(colegio.profesores));
                    const arrayProfesores =  JSON.stringify(colegio.profesores);
                    //console.log('colegio', colegio);
                    console.log('Profesores ', JSON.parse(arrayProfesores));
                }
            }
            menu();

        } catch (e) {
            console.error(e);
        }
    }


    async function elegirColegioDondeCrearProfesor() {
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
                const respuestaSelecColegio = await promesaSeleccionarColegioParaCrearProfesor(arrayColegios.map(
                    valorActual => {
                        return valorActual.nombreC;
                    }
                ));
                return respuestaSelecColegio;
               // console.log('respuestaSelecColegio',  respuestaSelecColegio)

            }
        } catch (e) {
            console.error(e);
        }
    }



}

main();








