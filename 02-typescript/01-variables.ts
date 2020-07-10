let nombre: string = 'Juan';
// nombre = 1 //no se puede reasignar valores de diferentes tipos
nombre = 'Lopez';

// Duck Typing
let edad: number = 23;
let casado: boolean =false;
let fecha: Date = new Date();
let sueldo: number;   // sin iniciar con valor
sueldo = 12.4;
// sueldo = '12.23'; // NO se puede

let marihuana: any = 2;
marihuana = "2";
marihuana = true;
marihuana = () => '2'

// varios valores a una variable
let edadMultiple: number | string = 2;
edadMultiple = '2';
edadMultiple = 2222;
edadMultiple = 'dos'




