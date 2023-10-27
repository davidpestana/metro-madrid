import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AlphaService {

  constructor() { }


  obtenerControlador(): AbstractControl {
    return new FormControl('');
  }
}
