import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent {

  titulo = 'soy el titulo!!!!!!!!!!';
  array = ['hola', 'adios', 'don pepito'];

  valor = 4;

  inactivo = true;

  imagenSrc = 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ejemplo.png';

  get cosa(): string {

    // logica
    console.log('pasando por la funcion get')
    return 'hola mundo';
  }

  unMetodo(): string {
    console.log('llamada al metodo')
    // proceso complejo
    return this.imagenSrc;
  }


  cuandoPulsasBoton(valor: string, evento: Event) {
    console.log(evento);
    console.log('boton pulsado', valor);
  }

  cuandoFocus() {
    console.log('focus');
  }

  cuandoCambia(texto:string, evento: any) {
    console.log(texto, evento);
  }
}
