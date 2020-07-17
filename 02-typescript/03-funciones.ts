// se le puede pasar parametros y especificar qu devuelve
function sumarNumeros(
    numeroInicial: number,
    ...numerosASumar: number []
) : number {
    return numeroInicial;
}

sumarNumeros(1, 2,3,4,5)

//void
function imprimir(mensaje : string) : void {
    console.log('Hola' + mensaje)
}

//tipar arreglos
const arregloNumeros: number[] = [1,2,3];
const arregloNumerosDos: Array<number> = [1,2,3];
const arregloNumerosTres: (number | string | boolean)[] = [1, "a", true];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, "a", true];
let arregloNumerosOTexto: number[] | string[] = [1,2,3];
arregloNumerosOTexto = ['1','2']