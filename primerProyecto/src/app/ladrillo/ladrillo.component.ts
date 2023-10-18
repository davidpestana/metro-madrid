import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-ladrillo',
  templateUrl: './ladrillo.component.html',
  styleUrls: ['./ladrillo.component.scss']
})
export class LadrilloComponent implements OnInit, AfterViewInit, OnDestroy {
  ladrillo = Math.random()
  intervalo: any;

  constructor() {
    console.log('construyendo mi ladrillo', this.ladrillo );
  }

  ngOnInit(): void {
      console.log('inicializando ladrillo', this.ladrillo);
      this.intervalo = setInterval(() => console.log('estoy vivo', this.ladrillo), 2000);
  }

  ngAfterViewInit(): void {
      console.log('se ha renderizado', this.ladrillo)
  }

  // ngOnDestroy(): void {
  //     console.log('destruyendo', this.ladrillo)
  //     clearInterval(this.intervalo);
  // }

  ngOnDestroy(): void {
      
  }

  // llamada a un api
}
