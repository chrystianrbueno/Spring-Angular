import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepsRoutingModule } from './ceps-routing.module';
import { CepsListarComponent } from './ceps-listar/ceps-listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CepsCadastrarComponent } from './ceps-cadastrar/ceps-cadastrar.component';
import { MatButtonModule } from '@angular/material/button';
import { CepsEditarComponent } from './ceps-editar/ceps-editar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CepsListarComponent,
    CepsCadastrarComponent,
    CepsEditarComponent
  ],
  imports: [
    CommonModule,    
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    CepsRoutingModule
  ]
})
export class CepsModule { }