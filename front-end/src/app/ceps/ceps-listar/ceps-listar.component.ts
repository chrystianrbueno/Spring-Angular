import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/models/cep.model';

import { CepsService } from 'src/app/services/ceps.service';


@Component({
  selector: 'app-ceps-listar',
  templateUrl: './ceps-listar.component.html',
  styleUrls: ['./ceps-listar.component.css']
})
export class CepsListarComponent implements OnInit {
  
  colunas: string [] = ['Cep', 'Logradouro'];
  enderecos: Endereco[] = [];

  constructor(private cepsService: CepsService) { }

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


}