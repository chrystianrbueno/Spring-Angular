import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepsCadastrarComponent } from './ceps-cadastrar.component';

describe('CepsCadastrarComponent', () => {
  let component: CepsCadastrarComponent;
  let fixture: ComponentFixture<CepsCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepsCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepsCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
