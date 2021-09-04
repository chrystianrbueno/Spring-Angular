import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepsRoutingModule } from './ceps-routing.module';
import { CepsListarComponent } from './ceps-listar/ceps-listar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CepsListarComponent
  ],
  imports: [
    CommonModule,    
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    CepsRoutingModule
  ]
})
export class CepsModule { }
