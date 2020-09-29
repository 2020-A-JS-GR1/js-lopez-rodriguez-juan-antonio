import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearProfesorComponent } from './ruta-crear-profesor.component';

describe('RutaCrearProfesorComponent', () => {
  let component: RutaCrearProfesorComponent;
  let fixture: ComponentFixture<RutaCrearProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
