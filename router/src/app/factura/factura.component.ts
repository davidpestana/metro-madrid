import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  @Input() factura: any;


}