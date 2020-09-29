import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColegioService} from "../../../servicios/http/colegio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulario-colegio',
  templateUrl: './formulario-colegio.component.html',
  styleUrls: ['./formulario-colegio.component.css']
})
export class FormularioColegioComponent implements OnInit {

  @Input()
  nombreColegioInput:string;

  @Input()
  direccionColegioInput:string;

  @Input()
  aforoColegioInput:number;

  @Input()
  bachilleratoUnificadoInput:string;

  @Input()
  licenciaColegioInput:string;

  @Output()
  informacionColegioValidada: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private readonly _colegioService:ColegioService,
    private readonly _router:Router
  ) { }

  nombreColegio:string;
  direccionColegio:string;
  aforoColegio:number;
  bachilleratoUnificado:string;
  licenciaColegio:string;

  ngOnInit(): void {
    if(this.nombreColegioInput &&
      this.direccionColegioInput &&
      this.aforoColegioInput &&
      this.bachilleratoUnificadoInput &&
      this.licenciaColegioInput
    ){
      this.nombreColegio=this.nombreColegioInput;
      this.direccionColegio=this.direccionColegioInput;
      this.aforoColegio=this.aforoColegioInput;
      this.bachilleratoUnificado=this.bachilleratoUnificadoInput;
      this.licenciaColegio=this.licenciaColegioInput;
    }

  }

  crearColegio(formulario){
    console.log(formulario);
    const aforo = this.aforoColegio;
    const esNumero = !Number.isNaN(Number(aforo));
    if(esNumero){
      this.informacionColegioValidada.emit({
        nombre_colegio:this.nombreColegio,
        direccion_colegio:this.direccionColegio,
        aforo_colegio:this.aforoColegio,
        bachillerato_unificado_colegio:this.bachilleratoUnificado,
        licencia_colegio:this.licenciaColegio
      })
    }else{
      console.error('NO ES UN NUMERO')
      alert('El aforo contener solo numeros')
    }
  }

  ayudaCrearColegio(){
    alert('Todos los campos son necesarios para esta operacion')
  }



}
