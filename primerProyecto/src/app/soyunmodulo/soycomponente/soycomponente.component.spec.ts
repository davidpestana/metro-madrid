import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoycomponenteComponent } from './soycomponente.component';

describe('SoycomponenteComponent', () => {
  let component: SoycomponenteComponent;
  let fixture: ComponentFixture<SoycomponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoycomponenteComponent]
    });
    fixture = TestBed.createComponent(SoycomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
