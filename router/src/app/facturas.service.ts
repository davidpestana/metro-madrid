import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Factura {
  facturaId: string,
  title: string,
  filter: string
}


@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor() { }

  obtenerFactura(facturaId:string, filter: string): Observable<Factura> {
    return of({
      facturaId,
      title: 'hola mundo',
      filter
    });
  }

}
