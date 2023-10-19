import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';


const modules = [
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
