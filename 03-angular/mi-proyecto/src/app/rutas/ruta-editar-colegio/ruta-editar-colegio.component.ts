import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ColegioService} from "../../servicios/http/colegio.service";

@Component({
  selector: 'app-ruta-editar-colegio',
  templateUrl: './ruta-editar-colegio.component.html',
  styleUrls: ['./ruta-editar-colegio.component.css']
})
export class RutaEditarColegioComponent implements OnInit {

  colegio;
  mostrarFormulario = false;

  constructor(
    private readonly _colegioService:ColegioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router,
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
            this.llenarFormularioColegio()
          },
          (error)=>{
            console.error('Error', error)
          }
        )
      }
    )
  }

  llenarFormularioColegio(){
    this.mostrarFormulario = true;
  }

  editarColegio(colegio){
    const obsEditarColegio =this._colegioService.editarColegio(colegio, this.colegio.id)
    obsEditarColegio.subscribe(
      (datos:Object)=>{
        const url = ['/colegio'];
        this._router.navigate(url);
      },
      (error)=>{console.error('Error',error)}
    )
  }
}
