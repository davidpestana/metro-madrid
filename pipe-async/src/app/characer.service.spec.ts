import { TestBed } from '@angular/core/testing';

import { CharacerService } from './characer.service';

describe('CharacerService', () => {
  let service: CharacerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
