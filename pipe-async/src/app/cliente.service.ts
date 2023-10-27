import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes = [
    {name: 'david', age: 46},
    {name: 'cristina', age:30}
  ]

  constructor() { }

  getClientesPromise(): Promise<any[]>  {
    return new Promise((res) => {
      setTimeout(() => res(this.clientes), 2000);
    })
  }

  getClientes(): Observable<any[]> {
    return of(this.clientes);
  }

}
