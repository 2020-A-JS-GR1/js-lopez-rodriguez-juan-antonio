import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioColegioComponent } from './formulario-colegio.component';

describe('FormularioColegioComponent', () => {
  let component: FormularioColegioComponent;
  let fixture: ComponentFixture<FormularioColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
