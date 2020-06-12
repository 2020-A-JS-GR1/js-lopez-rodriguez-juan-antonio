// tipos de variables
//mutables e inmutables

//MUTABLES
var numeroUno = 1;
let numeroDos = 2;

// se pueden sobreescribir
numeroUno = 5;
numeroDos = 8;

//se puede reasignar con cualquier tipo de valores
numeroUno = false;
numeroDos = true;

//inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";  // No se le puede reasignar valores a las constantes

// TIPOS de variables
const numero = 1;  //number
const sueldo = 1.2; //number
const texto = "Juan"; //string
const booleanooo = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
const apellido = 'Lopez' // string

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);


if(true == true){
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(""){ //! falsy
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if("Juan"){ // es truty
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(-1){ // es truty
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(0){ // es falsy
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(1){ // es truty
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(null){ // es falsy
    console.log("es verdadero")
}else{
    console.log("es falso")
}

if(undefined){ // es falsy
    console.log("es verdadero")
}else{
    console.log("es falso")
}

// Orden de importancia
// 1) "const"
// 2) "let"
// 3) X -> "var" NUNCA usar


// Objeto js (JSON) - Arreglos

const juan = {
    nombre: "Juan", // llave: valor,
    "apellido": 'Lopez',
    edad: 23,
    hijos: null,
    zapatos: undefined,
    ropa: {
        color: 'plomo',
        talla: '40',
    },
    mascotas: ['cachetes', 'pequitas', 'panda']
}; //object

juan.nombre; //"Juan"
juan.apellido; //"Lopez"

const arregloNumeros = []; //object

console.log(juan);
console.log(arregloNumeros);








