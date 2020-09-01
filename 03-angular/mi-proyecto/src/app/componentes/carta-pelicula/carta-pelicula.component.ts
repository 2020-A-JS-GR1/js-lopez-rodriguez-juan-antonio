import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;


  urlEjemploImagen = 'https://imagenes.canalrcn.com/lomaslike/avengers-endgame-numero-uno-en-taquillas.jpg';
  textoEjemplo = 'Juan';

  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion(){
    alert('HOLA')
  }
  eventoOnBlur(){
    console.log('Blur')
  }

}
