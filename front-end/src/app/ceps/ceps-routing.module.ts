import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepsListarComponent } from './ceps-listar/ceps-listar.component';

const routes: Routes = [
  {
    path:'ceps',
    component: CepsListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepsRoutingModule { }
