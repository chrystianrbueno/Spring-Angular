import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepsListarComponent } from './ceps-listar.component';

describe('CepsListarComponent', () => {
  let component: CepsListarComponent;
  let fixture: ComponentFixture<CepsListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepsListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepsListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
