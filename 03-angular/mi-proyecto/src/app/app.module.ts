import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogeadoGuard} from "./servicios/guards/esta-logeado.guard";
import {EsAdministradorGuard} from "./servicios/guards/es-administrador.guard";
import {EsSupervisorGuard} from "./servicios/guards/es-supervisor.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";
import { RutaProfesorComponent } from './rutas/ruta-profesor/ruta-profesor.component';
import { RutaColegioComponent } from './rutas/ruta-colegio/ruta-colegio.component';
import { RutaInicioExamenComponent } from './rutas/ruta-inicio-examen/ruta-inicio-examen.component';
import {ColegioService} from "./servicios/http/colegio.service";
import {ProfesorService} from "./servicios/http/profesor.service";
import { FormularioColegioComponent } from './componentes/formularios/formulario-colegio/formulario-colegio.component';
import { FormularioProfesorComponent } from './componentes/formularios/formulario-profesor/formulario-profesor.component';
import { RutaCrearColegioComponent } from './rutas/ruta-crear-colegio/ruta-crear-colegio.component';
import { RutaCrearProfesorComponent } from './rutas/ruta-crear-profesor/ruta-crear-profesor.component';
import { RutaEditarColegioComponent } from './rutas/ruta-editar-colegio/ruta-editar-colegio.component';
import { RutaEditarProfesorComponent } from './rutas/ruta-editar-profesor/ruta-editar-profesor.component';
import { RutaDetalleColegioComponent } from './rutas/ruta-detalle-colegio/ruta-detalle-colegio.component';

@NgModule({
  declarations: [ // componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent,
    RutaProfesorComponent,
    RutaColegioComponent,
    RutaInicioExamenComponent,
    FormularioColegioComponent,
    FormularioProfesorComponent,
    RutaCrearColegioComponent,
    RutaCrearProfesorComponent,
    RutaEditarColegioComponent,
    RutaEditarProfesorComponent,
    RutaDetalleColegioComponent,
  ],
  imports: [ // modulo vamos a usar
    BrowserModule,  // importa el ngfor y el ngif
    AppRoutingModule,
    HttpClientModule, // importa el HttpCliente
    FormsModule, BrowserAnimationsModule, // permita la funcionalidad de los formularios template
    MatButtonModule, //boton de angular materia
    NgbModule,
    ButtonModule,
  ],
  providers: [  // servicios
    UsuarioService,
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard,
    EsSupervisorGuard,
    ColegioService,
    ProfesorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
