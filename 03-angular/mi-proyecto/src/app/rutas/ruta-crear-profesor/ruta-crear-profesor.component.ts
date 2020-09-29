import { Component, OnInit } from '@angular/core';
import {ColegioService} from "../../servicios/http/colegio.service";
import {Router} from "@angular/router";
import {ProfesorService} from "../../servicios/http/profesor.service";

@Component({
  selector: 'app-ruta-crear-profesor',
  templateUrl: './ruta-crear-profesor.component.html',
  styleUrls: ['./ruta-crear-profesor.component.css']
})
export class RutaCrearProfesorComponent implements OnInit {

  constructor(
    private readonly _profesorService:ProfesorService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  crearProfesor(profesor){
    const obsCrearProfesor= this._profesorService.crearProfesor(profesor);
    obsCrearProfesor.subscribe(
      (datos:Object)=>{
        const url = ['profesor']
        this._router.navigate(url)
      },
      (error)=>{console.error('Error', error)}
    );
  }

}
