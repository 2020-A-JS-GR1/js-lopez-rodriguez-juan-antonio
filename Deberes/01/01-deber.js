/*DEBER para el viernes 26

Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones

1) por cada vocal dentro de la palabra del estudiante 0.1 decimas
2) por cada consonante dentro de la palabra del estudiante 0.05 decimas
3) Filtrar cuales personas pasaron (los que sean >14)
*/

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

arreglo.forEach((persona) => console.log(persona.nombre, " nota:",persona.nota))

const vocales = ['a', 'e', 'i', 'o', 'u'];
const arregloModificado = Object.assign(arreglo);

arregloModificado.forEach((persona) => {
    for (caracter of persona.nombre) {
        if(vocales.indexOf(caracter) !== -1){
            persona.nota += 0.1
        }else{
            persona.nota += 0.05
        }
    }
});

console.log('MODIFICADO');
arregloModificado.forEach((persona) => console.log(persona.nombre, " nota:",persona.nota.toFixed(2)));

const pasaron = arregloModificado.filter(persona => (persona.nota >= 14));
console.log("PASARON");
console.log(pasaron);



