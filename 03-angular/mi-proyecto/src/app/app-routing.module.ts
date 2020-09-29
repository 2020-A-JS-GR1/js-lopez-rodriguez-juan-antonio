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
import {RutaCrearColegioComponent} from "./rutas/ruta-crear-colegio/ruta-crear-colegio.component";
import {RutaEditarColegioComponent} from "./rutas/ruta-editar-colegio/ruta-editar-colegio.component";
import {RutaDetalleColegioComponent} from "./rutas/ruta-detalle-colegio/ruta-detalle-colegio.component";
import {RutaCrearProfesorComponent} from "./rutas/ruta-crear-profesor/ruta-crear-profesor.component";
import {RutaEditarProfesorComponent} from "./rutas/ruta-editar-profesor/ruta-editar-profesor.component";

const routes: Routes = [
  {
    component: RutaInicioComponent, //COMPONENTE
    path: 'inicio',  //URL
  },

  // PARA EL EXAMEN 2B
  {
    component: RutaInicioExamenComponent, //COMPONENTE
    path: 'inicioExamen',  //URL
  },
  {
    component: RutaProfesorComponent, //COMPONENTE
    path: 'profesor'  //URL
  },
  {
    component: RutaCrearProfesorComponent,
    path: 'crearProfesor'
  },
  {
    component: RutaEditarProfesorComponent,
    path: 'editarProfesor'
  },
  {
    component: RutaColegioComponent,
    path: 'colegio'
  },
  {
    component: RutaCrearColegioComponent,
    path: 'crearColegio'
  },
  {
    component: RutaEditarColegioComponent,
    path: 'editarColegio'
  },
  {
    component: RutaDetalleColegioComponent,
    path: 'detalleColegio'
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
