import { Component, OnInit } from '@angular/core';
import {ColegioService} from "../../servicios/http/colegio.service";
import {ProfesorService} from "../../servicios/http/profesor.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-detalle-colegio',
  templateUrl: './ruta-detalle-colegio.component.html',
  styleUrls: ['./ruta-detalle-colegio.component.css']
})
export class RutaDetalleColegioComponent implements OnInit {

  colegio;
  arregloProfesoresDelColegio;

  constructor(
    private readonly _colegioService:ColegioService,
    private readonly _profesorService:ProfesorService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => { //try
        const id = Number(parametros.id);
        const obsColegio = this._colegioService.obtenerUnColegioPorId(id);
        obsColegio.subscribe(
          (colegio:any)=>{
            this.colegio = colegio
            this.arregloProfesoresDelColegio = colegio['profesores']
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

}
