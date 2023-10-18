import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { soyguardGuard } from './soyguard.guard';

describe('soyguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => soyguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
