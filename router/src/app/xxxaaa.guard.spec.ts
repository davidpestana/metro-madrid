import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { xxxaaaGuard } from './xxxaaa.guard';

describe('xxxaaaGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => xxxaaaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
