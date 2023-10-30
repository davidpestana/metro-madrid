import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { FacturasService } from './facturas.service';

export const authGuard: CanActivateFn = (route, state) => {

  inject(FacturasService)

  console.log(route, state);
  return true;
};
