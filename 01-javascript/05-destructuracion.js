const adrian = {
    nombre:"Adrian"
};
const carolina = {
    apellido:"Eguez"
};

//unir lo de adrian y carolina
const adrianCarolina = {
    ...adrian,
    ...carolina,
};

console.log(adrianCarolina)

adrianCarolina.nombre="Carolina"
console.log(adrianCarolina)
console.log("adrian original:", adrian.nombre) //NO se afecto el inicial


const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo=[
    ...arregloUno,
    ...arregloDos
]
superArreglo[0] = 100;
console.log("superarreglo:", superArreglo);
console.log("arregloUno:", arregloUno);




