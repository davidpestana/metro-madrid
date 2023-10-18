import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LadrilloComponent } from './ladrillo/ladrillo.component';
import { SoyunadirectivaDirective } from './soyunadirectiva.directive';
import { SoypipePipe } from './soypipe.pipe';
import { SoyunmoduloModule } from './soyunmodulo/soyunmodulo.module';

@NgModule({
  declarations: [
    AppComponent,
    LadrilloComponent,
    SoyunadirectivaDirective,
    SoypipePipe
  ],
  imports: [
    BrowserModule,
    SoyunmoduloModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
