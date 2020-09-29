import { Component, OnInit } from '@angular/core';
import {ColegioService} from "../../servicios/http/colegio.service";

@Component({
  selector: 'app-ruta-colegio',
  templateUrl: './ruta-colegio.component.html',
  styleUrls: ['./ruta-colegio.component.css']
})
export class RutaColegioComponent implements OnInit {

  arregloColegios = [];

  constructor(
    private readonly _colegioService:ColegioService,

  ) { }

  ngOnInit(): void {
    const observableTraerTodosColegios=this._colegioService.traerTodosColegios();
    observableTraerTodosColegios.subscribe(
      (colegios: any[])=>{
        this.arregloColegios = colegios;
        console.log('Colegios', this.arregloColegios)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }



}
