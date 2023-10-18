import { TestBed } from '@angular/core/testing';

import { SoyservicioService } from './soyservicio.service';

describe('SoyservicioService', () => {
  let service: SoyservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoyservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
