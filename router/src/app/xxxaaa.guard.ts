import { CanDeactivateFn } from '@angular/router';

export const xxxaaaGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
