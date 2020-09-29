import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ColegioService} from "../../servicios/http/colegio.service";

@Component({
  selector: 'app-ruta-crear-colegio',
  templateUrl: './ruta-crear-colegio.component.html',
  styleUrls: ['./ruta-crear-colegio.component.css']
})
export class RutaCrearColegioComponent implements OnInit {

  constructor(
    private readonly _colegioService:ColegioService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  crearColegio(colegio){
    const obsCrearColegio= this._colegioService.crearColegio(colegio);
    obsCrearColegio.subscribe(
      (datos:Object)=>{
        const url = ['colegio']
        this._router.navigate(url)
      },
      (error)=>{console.error('Error', error)}
    );
  }

}
