import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto';

  arregloPeliculas = [
    {
      id:1,
      url: 'https://www.alfabetajuega.com/wp-content/uploads/2018/10/alfabetajuega-doom-1-200418.jpg',
      descripcion: 'Es una pelicula futurista',
      nombrePelicula: 'la roca'
    },
    {
      id:2,
      url: 'https://los40es00.epimg.net/los40/imagenes/2020/08/04/cinetv/1596531662_429948_1596533048_noticia_normal.jpg',
      descripcion: 'Terror no apto para menores',
      nombrePelicula: 'Ghost'
    },
    {
      id:3,
      url: 'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/12/20/Recortada/img_astrid_20191223-145256_imagenes_lv_terceros_combopelis19-k3S-U472367896624VND-992x558@LaVanguardia-Web.jpg',
      descripcion: 'Varias peliculas en una',
      nombrePelicula: 'Mix Jocker'
    }
  ]
  arregloNumeros = [1,2,3]

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }


}
