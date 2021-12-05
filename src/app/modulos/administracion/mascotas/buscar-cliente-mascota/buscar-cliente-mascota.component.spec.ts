import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarClienteMascotaComponent } from './buscar-cliente-mascota.component';

describe('BuscarClienteMascotaComponent', () => {
  let component: BuscarClienteMascotaComponent;
  let fixture: ComponentFixture<BuscarClienteMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarClienteMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarClienteMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
