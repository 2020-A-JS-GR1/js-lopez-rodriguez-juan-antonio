import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  constructor() { }

  nombreModelo: string;
  cedulaModelo: string;
  estadoCivilModelo: string

  ngOnInit(): void {

  }

  crearUsuario(formulario){
    const cedula = this.cedulaModelo;
    const esNumero = !Number.isNaN(Number(cedula))
    if(esNumero){
      // llamar al servicio http y enviar un post al servidor con los datos del formulario
    }else{
      console.error('NO ES UN NUMERO')
    }

  }

  ayuda(){
    alert('Ayuda');
  }

}
