import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    UsuariosCadastroComponent,
    UsuariosListaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
