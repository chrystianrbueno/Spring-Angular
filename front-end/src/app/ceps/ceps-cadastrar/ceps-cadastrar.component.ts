import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CepsService } from 'src/app/services/ceps.service';

@Component({
  selector: 'app-ceps-cadastrar',
  templateUrl: './ceps-cadastrar.component.html',
  styleUrls: ['./ceps-cadastrar.component.css']
})
export class CepsCadastrarComponent implements OnInit {
  
  dadosCepForm = this.fb.group({
    Cep: ['', [Validators.required, Validators.maxLength(8)]],
    Logradouro: [''],
    Complemento: [''],
    Bairro: [''],
    Localidade: ['',[Validators.required, Validators.maxLength(30)]],
    UF: [''],
  });

  constructor(private fb: FormBuilder,private router: Router, private cepService: CepsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const dadosCep = this.dadosCepForm.value;
    this.cepService.setAddress(dadosCep).subscribe(
      result=>{
        this.router.navigate(['/ceps']);
      },
      erro =>{
        console.log(erro);
        console.log(dadosCep)
        alert("Erro ao cadastrar o Cep");
      } 
    );
  }
}