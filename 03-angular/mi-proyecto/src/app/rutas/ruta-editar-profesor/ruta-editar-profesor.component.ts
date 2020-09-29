import { Component, OnInit } from '@angular/core';
import {ColegioService} from "../../servicios/http/colegio.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProfesorService} from "../../servicios/http/profesor.service";

@Component({
  selector: 'app-ruta-editar-profesor',
  templateUrl: './ruta-editar-profesor.component.html',
  styleUrls: ['./ruta-editar-profesor.component.css']
})
export class RutaEditarProfesorComponent implements OnInit {

  profesor;
  mostrarFormulario = false;

  constructor(
    private readonly _profesorService:ProfesorService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsProfesor = this._profesorService.obtenerUnProfesorPorId(id);
        obsProfesor.subscribe(
          (profesor:any)=>{
            this.profesor = profesor
            this.llenarFormularioProfesor()
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

  llenarFormularioProfesor(){
    this.mostrarFormulario = true;
  }

  editarProfesor(profesor){
    const obsEditarProfesor =this._profesorService.editarProfesor(profesor, this.profesor.id)
    obsEditarProfesor.subscribe(
      (datos:Object)=>{
        const url = ['/profesor'];
        this._router.navigate(url);
      },
      (error)=>{console.error('Error',error)}
    )
  }
}
