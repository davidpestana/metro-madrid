import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HolaComponent } from './hola/hola.component';
import { AdiosComponent } from './adios/adios.component';
import { CoreComponent } from './core/core.component';
import { Error404Component } from './error404/error404.component';
import { FacturaComponent } from './factura/factura.component';
import { BillComponent } from './pages';
import { CustomerComponent } from './pages/customer/customer.component';
import { of } from 'rxjs';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'hola', component: HolaComponent },
  { path: 'adios', component: AdiosComponent },
  { path: 'factura/:facturaId', component: BillComponent, canActivate: [ authGuard ]},
  { path: '**', component: Error404Component, canActivate: [
    () => {
      return of(true);
    },
    () => {
      return true;
    }

  ], canDeactivate: []  },
];

@NgModule({
  declarations: [
    AppComponent,
    HolaComponent,
    AdiosComponent,
    CoreComponent,
    Error404Component,
    FacturaComponent,
    BillComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // pasar configuracion
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
