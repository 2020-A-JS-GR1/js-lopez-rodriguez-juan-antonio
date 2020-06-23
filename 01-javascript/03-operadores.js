const arreglo = [
    {
        id:1,
        nombre:'Juan',
        nota:5
    },
    {
        id:2,
        nombre:'Antonio',
        nota:8
    },
    {
        id:3,
        nombre:'Camila',
        nota:9
    },
    {
        id:4,
        nombre:'Piki',
        nota:13
    },
    {
        id:5,
        nombre:'Armando',
        nota:15
    },
    {
        id:6,
        nombre:'Pepe',
        nota:16
    },
    {
        id:7,
        nombre:'Marta',
        nota:11
    },
    {
        id:8,
        nombre:'Pedro',
        nota:18
    },
    {
        id:9,
        nombre:'Julio',
        nota:17
    },
    {
        id:10,
        nombre:'Pablo',
        nota:12
    }
];


const respuestaFind = arreglo
    .find( //funcion anonima
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indice =Actual', indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === 'Piki';
        }
    );
console.log('.find')
console.log('respuestaFind', respuestaFind); //devuelve undefined, debemos devolver un truty o un false para evitar esto


//FINDINDEX

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indice =Actual', indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === "Armando";
        }
    );
console.log('.findIndex')
console.log('respuestaFind', respuestaIndex);


//FOREACH
//Solo para iterar
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log('valorActual',valorActual);
            console.log('indice =Actual', indiceActual);
            console.log('arregloCompleto',arregloCompleto);
        }
    );
console.log('.foreach')
console.log('respuestaForEach', respuestaForEach); //undefined


//MAP
//devuelve un NUEVO ELEMENTO
//Quiero aumentar un punto en la nota de todos los del arreglo
//se pueded modificar o crear un arreglo nuevo

//sumar un punto a todos

const respuestaMap = arreglo
    .map(
         (valorActual, indiceActual, arregloCompleto) => {
             const nuevoElemento = {
                 id: valorActual.id,
                 nombre: valorActual.nombre,
                 nota: valorActual.nota + 1
             }

             return nuevoElemento;
        }
    );
console.log('.map')
console.log('respuestaMap', respuestaMap);

//sacar solo notas

const respuestaMapNuevo = arreglo
    .map(
        // Funcion Anonima -> NO TIENE NOMBRE
        // La de flecha gorda es como la siguiente con =>
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota;
        }
    );
console.log('.mapNuevo')
console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

//FILTER
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto) => {
            return valorActual.nota >=14;
        }
    );
console.log('filter')
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);


//SEGUNDA CLASE

//SOME -> expresion
//DEVUELVE BOOLEANO
//Hay ALGUNA nota menor a nueve? SI o NO
//OR
const respuestaSome = arreglo
    .some(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota < 4;
        }
    )
console.log("SOME")
console.log('respuestaSome', respuestaSome)

//EVERY
//DEVUELVE BOOLEANO
//Todas las notas son mayores a 14? SI o NO
//AND
const respuestaEvery = arreglo
    .every(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota < 4;
        }
    )
console.log("EVERY")
console.log('respuestaEvery', respuestaEvery)


//REDUCE
//reduce    Empieza las operaciones de izq -> der
//reduceRight   der -> izq

//Promedio de todas las notas del curso
const respuestaReduce = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo)=>{
            return valorAcumulado + valorActual.nota;
        },
        0 //acumulador
    )

console.log("REDUCE")
console.log('respuestaReduce', respuestaReduce) //124

//Al acumulador de 500 le quiero restar el valor del total de las notas
//Como si 500 fuese la vida en un juego y las notas sean vida que se va perdiendo
const respuestaReduce2 = arreglo
    .reduce(
        (valorAcumulado, valorActual, indice, arreglo)=>{
            return valorAcumulado - valorActual.nota;
        },
        500 //acumulador
    )

console.log("REDUCE2")
console.log('respuestaReduce2', respuestaReduce2) //500 - 124


//aumentar %30 de la nota
//sacar menores a 9
// sacar promedio
const arregloEstudiantesMenoresANueve = arreglo
    .map((v) => v.nota * 1.3) // anadiendo el 30 %
    .filter((nota) => nota < 9); // Busco a los < 9
const totalPuntosEstudiantes = arregloEstudiantesMenoresANueve
    .reduce((acumulado, actual) => acumulado + actual, 0); // total
const notaPromedio = totalPuntosEstudiantes / arregloEstudiantesMenoresANueve.length;
console.log('notaPromedio', notaPromedio);



















