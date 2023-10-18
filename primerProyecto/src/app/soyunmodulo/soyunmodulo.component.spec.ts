import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyunmoduloComponent } from './soyunmodulo.component';

describe('SoyunmoduloComponent', () => {
  let component: SoyunmoduloComponent;
  let fixture: ComponentFixture<SoyunmoduloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyunmoduloComponent]
    });
    fixture = TestBed.createComponent(SoyunmoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
