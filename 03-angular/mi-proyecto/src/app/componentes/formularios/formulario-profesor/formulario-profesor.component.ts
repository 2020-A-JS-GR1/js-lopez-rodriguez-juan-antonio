import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColegioService} from "../../../servicios/http/colegio.service";
import {Router} from "@angular/router";
import {ProfesorService} from "../../../servicios/http/profesor.service";

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.component.html',
  styleUrls: ['./formulario-profesor.component.css']
})
export class FormularioProfesorComponent implements OnInit {

  @Input()
  cedulaProfesorInput:number;

  @Input()
  nombreProfesorInput:string;

  @Input()
  apellidoProfesorInput:number;

  @Input()
  birthdateProfesorInput:string;

  @Input()
  estadoCivilProfesorInput:string;

  @Input()
  doctoradoProfesorInput:string;

  @Input()
  colegioInput:number;

  @Output()
  informacionProfesorValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _profesorService:ProfesorService,
    private readonly _router:Router
  ) { }

  cedulaProfesor:number;
  nombreProfesor:string;
  apellidoProfesor:number;
  birthdateProfesor:string;
  estadoCivilProfesor:string;
  doctoradoProfesor:string;
  colegio:number;

  ngOnInit(): void {
    if(this.cedulaProfesorInput &&
      this.nombreProfesorInput &&
      this.apellidoProfesorInput &&
      this.birthdateProfesorInput &&
      this.estadoCivilProfesorInput &&
      this.doctoradoProfesorInput &&
      this.colegioInput
    ){
      this.cedulaProfesor=this.cedulaProfesorInput;
      this.nombreProfesor=this.nombreProfesorInput;
      this.apellidoProfesor=this.apellidoProfesorInput;
      this.birthdateProfesor=this.birthdateProfesorInput;
      this.estadoCivilProfesor=this.estadoCivilProfesorInput;
      this.doctoradoProfesor=this.doctoradoProfesorInput;
      this.colegio=this.colegioInput;
    }

  }

  crearProfesor(formulario){
    console.log(formulario);
    const cedula = this.cedulaProfesor;
    const esNumero = !Number.isNaN(Number(cedula));
    if(esNumero){
      this.informacionProfesorValidada.emit({
        cedula_profesor: this.cedulaProfesor,
        nombre_profesor: this.nombreProfesor,
        apellido_profesor: this.apellidoProfesor,
        birthdate_profesor: this.birthdateProfesor,
        estado_civil_profesor: this.estadoCivilProfesor,
        doctorado_profesor: this.doctoradoProfesor,
        colegio:this.colegio
      })
    }else{
      console.error('NO ES UN NUMERO')
      alert('La cedula debe contener solo numeros')
    }
  }

  ayudaCrearProfesor(){
    alert('Todos los campos son necesarios para esta operacion')
  }



}
