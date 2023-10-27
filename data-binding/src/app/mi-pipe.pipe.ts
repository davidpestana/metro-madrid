import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  property = 1;

  constructor() {
    // inyectar dependencias
  }

  transform(texto: string, format: string, ...args: unknown[]): number[] {
    console.log(texto, format, args);
    return [1,2,3];
  }


  metodos() {

  }
}



() => Math.random();


(a) => a + 1;


(objeto) =>  {
    objeto.name = 'pepe'
    let newObjeto = {...objeto, name: 'pepe'};
    return newObjeto;
}


(array) => array.map((e) => e+1)

(array) => array.push(1);
