const arreglo = [ 6, 7, 8, 9, 10];

const arregloTodo = [
    true, 1, 1.2, "Juan", undefined, null, {}, [1 ,2, true, "A"]
];

let a = [1, 2, 3];
const b = Object.assign([],a);

//for of /da los valores
for (let numero of arreglo){
    console.log('numero', numero);
}

//for in /da las posiciones
for (let numero in arreglo){
    console.log('indice', numero);
}

//aniadir un valor al arreglo
arreglo.push(11);

//eliminar elemento del final
arreglo.pop();

//aniade al principio del arreglo
arreglo.unshift(5);
console.log(arreglo);

//Eliminar e insertar elementos en el lugar eliminado
arreglo.splice(0, 1); //elimina desde el indice 0, un elemento
console.log(arreglo);

//elimina desde 0, cero elementos, inserta 3,4,5
arreglo.splice(0, 0, 3,4,5);
console.log(arreglo);

//localizar el indice de un numero
//const indice2 = arreglo.indexOf(9); // devuelve -1 no existe
const indice = arreglo.indexOf(9); // devuelve 6
console.log('indice', indice) //6
//Eliminar el numero usando el indice
arreglo.splice(indice, 1)

//arreglo.findIndex();


