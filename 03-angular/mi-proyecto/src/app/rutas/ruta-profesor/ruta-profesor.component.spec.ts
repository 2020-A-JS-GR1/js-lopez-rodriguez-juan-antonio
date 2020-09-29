import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProfesorComponent } from './ruta-profesor.component';

describe('RutaProfesorComponent', () => {
  let component: RutaProfesorComponent;
  let fixture: ComponentFixture<RutaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
