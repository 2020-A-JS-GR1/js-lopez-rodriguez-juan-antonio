import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarProfesorComponent } from './ruta-editar-profesor.component';

describe('RutaEditarProfesorComponent', () => {
  let component: RutaEditarProfesorComponent;
  let fixture: ComponentFixture<RutaEditarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
