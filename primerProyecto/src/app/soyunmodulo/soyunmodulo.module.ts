import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoyunmoduloComponent } from './soyunmodulo.component';
import { SoycomponenteComponent } from './soycomponente/soycomponente.component';



@NgModule({
  declarations: [
    SoyunmoduloComponent,
    SoycomponenteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SoyunmoduloModule { }
