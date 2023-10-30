import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { Factura, FacturasService } from 'src/app/facturas.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent {
  factura$: Observable<Factura>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private facturasService: FacturasService
  ) {
    this.factura$ =

    combineLatest([
      this.activatedRoute.params,
      this.activatedRoute.queryParams
    ]).pipe(
      map(([{facturaId}, {filter}]) => ({facturaId,filter})),
      switchMap(({facturaId, filter}: any) => this.facturasService.obtenerFactura(facturaId, filter))
    )

    this.activatedRoute.queryParams

  }
}
