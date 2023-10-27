import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MisValidadores } from './validators';
import { ThisReceiver } from '@angular/compiler';
import { AlphaService } from './alpha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';

  passControl = new FormControl('',[Validators.minLength(3)]);
  passBisControl = new FormControl('', this.equals2)
  controllerDinamico: AbstractControl;

  grupo: FormGroup = new FormGroup({
    pass: this.passControl,
    passBis: this.passBisControl,
  });

  constructor(private aS:AlphaService){
    this.controllerDinamico = this.aS.obtenerControlador();


    this.grupo.setControl('passBis', this.controllerDinamico);


    this.passControl.valueChanges.subscribe(() => this.passBisControl.updateValueAndValidity())

  }

  equals(control: AbstractControl): ValidatorFn {
    return ({value}: AbstractControl): ValidationErrors | null => {
        console.log('esta validando !!', control);
        return control.value === value ? null : {notEquals: {pass: control.value, value}};
    }
  }



  equals2(control: AbstractControl): ValidationErrors | null {
      console.log(control.parent?.get('pass')?.value)
      return null;
  }

}
