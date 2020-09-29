import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarColegioComponent } from './ruta-editar-colegio.component';

describe('RutaEditarColegioComponent', () => {
  let component: RutaEditarColegioComponent;
  let fixture: ComponentFixture<RutaEditarColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
