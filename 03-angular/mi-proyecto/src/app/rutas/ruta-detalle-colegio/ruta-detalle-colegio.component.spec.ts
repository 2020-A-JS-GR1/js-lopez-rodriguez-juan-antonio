import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleColegioComponent } from './ruta-detalle-colegio.component';

describe('RutaDetalleColegioComponent', () => {
  let component: RutaDetalleColegioComponent;
  let fixture: ComponentFixture<RutaDetalleColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaDetalleColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
