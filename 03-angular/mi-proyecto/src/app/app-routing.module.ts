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

const routes: Routes = [
  {
    component: RutaInicioComponent, //COMPONENTE
    path: 'inicio'  //URL
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
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
