import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepsCadastrarComponent } from './ceps-cadastrar/ceps-cadastrar.component';
import { CepsListarComponent } from './ceps-listar/ceps-listar.component';

const routes: Routes = [
  {
    path:'ceps',
  children: [
    {
      path: '',
      component: CepsListarComponent
    },
    {
      path: 'cadastrar',
      component: CepsCadastrarComponent
    } 
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CepsRoutingModule { }
