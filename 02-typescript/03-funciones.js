// se le puede pasar parametros y especificar qu devuelve
function sumarNumeros(numeroInicial) {
    var numerosASumar = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosASumar[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumarNumeros(1, 2, 3, 4, 5);
//void
function imprimir(mensaje) {
    console.log('Hola' + mensaje);
}
//tipar arreglos
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, "a", true];
var arregloNumerosCuatro = [1, "a", true];
var arregloNumerosOTexto = [1, 2, 3];
arregloNumerosOTexto = ['1', '2'];
