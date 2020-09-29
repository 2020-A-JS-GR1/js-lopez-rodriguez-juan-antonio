import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearColegioComponent } from './ruta-crear-colegio.component';

describe('RutaCrearColegioComponent', () => {
  let component: RutaCrearColegioComponent;
  let fixture: ComponentFixture<RutaCrearColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
