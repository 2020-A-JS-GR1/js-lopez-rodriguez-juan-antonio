import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/guards/es-administrador.guard";
import {EsSupervisorGuard} from "./servicios/guards/es-supervisor.guard";
import {RutaProfesorComponent} from "./rutas/ruta-profesor/ruta-profesor.component";
import {RutaColegioComponent} from "./rutas/ruta-colegio/ruta-colegio.component";
import {RutaInicioExamenComponent} from "./rutas/ruta-inicio-examen/ruta-inicio-examen.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, //COMPONENTE
    path: 'inicio',  //URL
  },
  {
    component: RutaInicioExamenComponent, //COMPONENTE
    path: 'inicioExamen',  //URL
  },
  {
    component: RutaProfesorComponent, //COMPONENTE
    path: 'profesor'  //URL
  },
  {
    component: RutaColegioComponent,
    path: 'colegio'
  },


  {
    component: RutaLoginComponent, //COMPONENTE
    path: 'login'  //URL
  },
  {
    component: RutaUsuarioComponent, //COMPONENTE
    path: 'usuario',  //URL
    canActivate : [
      EstaLogeadoGuard
    ],
    children:[
      {
        path: 'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path: 'crear',
        canActivate: [
          EsSupervisorGuard
        ],
        component: RutaCrearUsuarioComponent
      },
      {
        path: 'editar/:id',
        canActivate: [
          EsAdministradorGuard
        ],
        component: RutaEditarUsuarioComponent
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/inicioExamen',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
