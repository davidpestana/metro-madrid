import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adios',
  templateUrl: './adios.component.html',
  styleUrls: ['./adios.component.scss']
})
export class AdiosComponent {

    constructor(private router: Router){

    }


    viajar() {
      // this.router.navigate(['hola']);
      // determinar a donde
      this.router.navigateByUrl('hola');
    }
}
