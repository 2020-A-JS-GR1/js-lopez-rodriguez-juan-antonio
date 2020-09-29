import { Component, OnInit } from '@angular/core';
import {ProfesorService} from "../../servicios/http/profesor.service";

@Component({
  selector: 'app-ruta-profesor',
  templateUrl: './ruta-profesor.component.html',
  styleUrls: ['./ruta-profesor.component.css']
})
export class RutaProfesorComponent implements OnInit {

  arregloProfesores = [];

  constructor(
    private readonly _profesorService:ProfesorService
  ) { }

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
