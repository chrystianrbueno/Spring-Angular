import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CepsService } from 'src/app/services/ceps.service';
import { Endereco } from 'src/app/models/cep.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ceps-editar',
  templateUrl: './ceps-editar.component.html',
  styleUrls: ['./ceps-editar.component.css']
})
export class CepsEditarComponent implements OnInit {

  constructor(private router: ActivatedRoute, private cepsService: CepsService, private fb: FormBuilder) { }
  
  id: any;
  endereco: Endereco | undefined; 


  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.cepsService.getAddressById(this.id).subscribe(
      dados=> {
        console.log(this.id);
        this.endereco = dados;
      },
      erro=>{
        console.log(erro);
      }
    );
  }

}
