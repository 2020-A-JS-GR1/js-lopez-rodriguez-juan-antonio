import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent
  implements OnInit, OnDestroy {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen:EventEmitter<boolean> = new EventEmitter<boolean>()


  urlEjemploImagen = 'https://imagenes.canalrcn.com/lomaslike/avengers-endgame-numero-uno-en-taquillas.jpg';
  textoEjemplo = 'Juan';
  linkTextoEjemplo = 'https://www.google.com/';

  constructor() {
    console.log('Constructor')
  }

  ngOnInit(): void {
    console.log('INIT')
    // logica inicial del componente
  }

  ngOnDestroy(): void {
    console.log('Destroy')
    // se dessuscriben las suscripciones
    // si se dejan abiertas se consume memoria y salen bugs
  }



  ejemploFuncion(){
    alert('HOLA')
  }
  eventoOnBlur(){
    console.log('Blur')
  }

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClicImagen(){
    this.eventoDioClicEnImagen.emit(true)
  }

}
