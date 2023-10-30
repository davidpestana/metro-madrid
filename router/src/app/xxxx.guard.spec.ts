import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { xxxxGuard } from './xxxx.guard';

describe('xxxxGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => xxxxGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
