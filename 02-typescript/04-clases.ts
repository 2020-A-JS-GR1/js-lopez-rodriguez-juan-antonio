
class Persona{
    public nombre:string;
    public apellido:string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = ''

    constructor(
        nombreParametro:string,
        apellidoParametro:string
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' +this.apellido;
    }

    private mostrarNombreApellido():string {
        return this.nombreYApellido;
    }

}

class Usuario extends Persona{
    constructor(
        nombreParametro:string,
        apellidoParametro:string,
        public cedula: string,
        public estadoCivil:string
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const juan = new Usuario(
    'Juan',
    'Lopez',
    '1757279500',
    'soltero'
);
console.log(juan.nombre)
console.log(juan.apellido)
console.log(juan.cedula)
console.log(juan.estadoCivil)



