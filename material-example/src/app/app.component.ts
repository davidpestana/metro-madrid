import { Target } from '@angular/compiler';
import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'material-example';
  persona = {
    nombre: 'Robb',
    apellidos: 'Stark',
    edad: 28
  }


  evento_bis(...inputs: string[]) {
    console.log(inputs)
  }

  llamada(c: EjemploComponent) {

    c.metodo();

  }

  onTick(tick: number) {
    console.log('el componente hizo tick', tick);
  }

  onClick(){
    console.log('hice click');
  }

}
