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
    mascotas: ['cachetes', 'pequitas', 'panda'],
}; //object

juan.nombre; //"Juan"
juan.apellido; //"Lopez"
juan["nombre"]; //Juan

/*
const arregloNumeros = []; //object

console.log(juan);
console.log(arregloNumeros);
*/

//PARA REASIGNAR VALORES DENTRO DEL JSON
juan.nombre = "Juanci";
console.log(juan);

juan["nombre"] = "Juan";
console.log(juan);

//Aumentar atributos
/*
juan.sueldo; // undefined
console.log(juan.sueldo);//undefined
*/
juan.sueldo = 1.2;
console.log(juan.sueldo);//1.2

juan["gastos"] = 0.8;
console.log(juan.gastos);//0.8

//Para eliminar atributos se debe igualar a undefined

juan.nombre = undefined;
console.log(juan);

// si se desea que elimine por completo y no este como undefined se usa
delete juan.nombre; // Elimina la llave nombre
console.log(juan);

Object.keys(juan); //obtiene las llaves de un objeto
console.log(Object.keys(juan));

//obtener valores
Object.values(juan);
console.log(Object.values(juan));

//lista de variables por valor en js
// number
//string
//boolean
//undefined

//Variables por valor
let edadJuan = 23;
let edadVicente = edadJuan;
console.log(edadJuan);  //23
console.log(edadVicente); //23

edadJuan = edadJuan + 1;
console.log(edadJuan); //24
console.log(edadVicente); //23

//Variables por referencia
//siempre apuntan al mismo lugar

//Lista de variables por referencia en js
/* //ejemplo por referencia
let rafael = {
    nombre: "Rafael"
}
let lenin = rafael;

console.log(lenin); //rafael
console.log(rafael); //rafael
lenin.nombre = "Lenin"; //todo lo que se le hace a lenin afecta a la referencia
console.log(lenin); //lenin
console.log(rafael); //lenin

delete rafael.nombre;
console.log(lenin);
console.log(rafael);
*/

//Clonar un objeto, NO igualar por referencia
let rafael = {
    nombre: "Rafael"
}
let lenin = Object.assign({}, rafael);

console.log(lenin);
console.log(rafael);

lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(lenin); // lenin
console.log(rafael); //{}






