import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { SegundaDirectivaDirective } from './segunda-directiva.directive';
import { FormsModule } from '@angular/forms';
import { MiPipePipe } from './mi-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    SegundaDirectivaDirective,
    MiPipePipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
