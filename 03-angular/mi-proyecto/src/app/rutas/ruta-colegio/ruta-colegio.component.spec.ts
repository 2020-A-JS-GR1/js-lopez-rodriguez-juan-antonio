import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaColegioComponent } from './ruta-colegio.component';

describe('RutaColegioComponent', () => {
  let component: RutaColegioComponent;
  let fixture: ComponentFixture<RutaColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
