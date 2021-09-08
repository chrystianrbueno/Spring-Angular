import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepsEditarComponent } from './ceps-editar.component';

describe('CepsEditarComponent', () => {
  let component: CepsEditarComponent;
  let fixture: ComponentFixture<CepsEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepsEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
