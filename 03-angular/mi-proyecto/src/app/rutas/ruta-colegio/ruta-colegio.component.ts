import {Component, OnInit} from '@angular/core';
import {ColegioService} from "../../servicios/http/colegio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-colegio',
  templateUrl: './ruta-colegio.component.html',
  styleUrls: ['./ruta-colegio.component.css']
})
export class RutaColegioComponent implements OnInit {

  arregloColegios = [];

  constructor(
    private readonly _colegioService: ColegioService,
    private readonly _router: Router
  ) {
  }

  irAEditarColegio(id: number) {
    const ruta = ['/editarColegio', id]
    // /editarEstablecimiento/1
    this._router.navigate(ruta);
  }

  irAVerColegio(id:number){
    const ruta = ['/detalleColegio', id]
    this._router.navigate(ruta) ;
  }

  eliminarColegio(id: number) {
    const obsEliminar = this._colegioService.eliminarColegio(id);
    obsEliminar.subscribe(
      () => {
        // Borrando de la interfaz
        const indice = this.arregloColegios
          .findIndex(u => u.id === id);
        this.arregloColegios.splice(indice, 1);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

  ngOnInit(): void {
    const observableTraerTodosColegios = this._colegioService.traerTodosColegios();
    observableTraerTodosColegios.subscribe(
      (colegios: any[]) => {
        this.arregloColegios = colegios;
        console.log('Colegios', this.arregloColegios)
      },
      (error) => {
        console.error('Error', error);
      }
    )
  }


}
