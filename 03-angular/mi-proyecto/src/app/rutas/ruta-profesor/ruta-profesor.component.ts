import { Component, OnInit } from '@angular/core';
import {ProfesorService} from "../../servicios/http/profesor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-profesor',
  templateUrl: './ruta-profesor.component.html',
  styleUrls: ['./ruta-profesor.component.css']
})
export class RutaProfesorComponent implements OnInit {

  arregloProfesores = [];

  constructor(
    private readonly _profesorService:ProfesorService,
    private readonly _router: Router
  ) { }


  irAEditarProfesor(id: number) {
    const ruta = ['/editarProfesor', id]
    // /editarEstablecimiento/1
    this._router.navigate(ruta);
  }

  eliminarColegio(id: number) {
    const obsEliminar = this._profesorService.eliminarProfesor(id);
    obsEliminar.subscribe(
      () => {
        // Borrando de la interfaz
        const indice = this.arregloProfesores
          .findIndex(u => u.id === id);
        this.arregloProfesores.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  ngOnInit(): void {
    const observableTraerTodosProfesores=this._profesorService.traerTodosProfesores();
    observableTraerTodosProfesores.subscribe(
      (profesores: any[])=>{
        this.arregloProfesores = profesores;
        console.log('Profesores', this.arregloProfesores)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }

}
