//FUNCIONES
function soloNumeros(a,b,c){
    return a - b + c; //valor a devolver
}

//JS no valida los parametros que se pasan
soloNumeros('v', true,[1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,7,8,9)


function soloLetras(a,b,c){  //undefined
    console.log(a,b,c);
}
soloLetras();

//Funciones nombradas
function funcionNombrada() {}
funcionNombrada();
const funcionNombradaDos = function () {} //funciones ANONIMAS
var funcionNombradaTres = function () {} //funciones SIN NOMBRE
let funcionNombradaCuatro = function opcional () {} //funcion ANONIMA
//opcional() //NO EXISTO


//  FUNCION DE FLECHA GORDA
const funcionNombradaCinco = ()=>{}; //FAT ARROW FUNCTIONS

const funcionNombradaSeis = (x) => { // con parametro y return
    return x + 1
};

// la 6 en una linea
const funcionNombradaSiete = (x) => x + 1;  //omito return
                                            //omito llaves

//SOLO UN PARAMETRO omito ()
const funcionNombradaOcho = x => x + 1;

//Mas de un parametro
const funcionNombradaNueve = (x,y,z) => x + y +z;


//PARAMETROS INFINITOS
function sumarNumeros(numeroInicial, //number
                      ...otrosNumeros) { // arreglo de todos los numeros que quiera
    return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0)
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10)
console.log(sumarNumeros(1,2,3,4,5,6,7,8,9,10))








