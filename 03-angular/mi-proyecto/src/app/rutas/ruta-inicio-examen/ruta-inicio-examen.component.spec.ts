import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInicioExamenComponent } from './ruta-inicio-examen.component';

describe('RutaInicioExamenComponent', () => {
  let component: RutaInicioExamenComponent;
  let fixture: ComponentFixture<RutaInicioExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaInicioExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInicioExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
