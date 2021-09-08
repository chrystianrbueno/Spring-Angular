import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/cep.model';

import { CepsService } from 'src/app/services/ceps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ceps-listar',
  templateUrl: './ceps-listar.component.html',
  styleUrls: ['./ceps-listar.component.css']
})
export class CepsListarComponent implements OnInit {
  
  colunas: string [] = ['Cep', 'Logradouro', 'Complemento', 'Bairro', 'Localidade', 'UF', 'ACTIONS' ];
  enderecos: Endereco[] = [];

  constructor(private cepsService: CepsService, private router: Router) { }

  ngOnInit() : void{
    this.cepsService.getAllAddressess().subscribe(
      dados => {
        this.enderecos = dados;
        console.log(dados);
      },
      erro =>{
        console.log(erro);
        this.enderecos = [];
      }
    );
  }

  deleteAddress(id: number){
    this.cepsService.deleteAddress(id).subscribe(
      dados => {
        console.log("Delete successful");
        console.log(dados);
        this.ngOnInit();
      },
      erro => {
        console.log(erro);
      }
    )
  }

  editAddress(id: number){
      this.router.navigate([`ceps/editar/${id}`]);
  }

}