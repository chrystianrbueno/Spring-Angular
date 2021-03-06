import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { Endereco } from '../models/cep.model'; 
import { CEPS_API_URL } from '../utils/rest'; 

@Injectable({
  providedIn: 'root'
})
export class CepsService {

  constructor(private api: RestapiService) { }

  public getAllAddressess(){
    return this.api.get<Endereco[]>(CEPS_API_URL)
  }

  public getAddress(cep: string){
    return this.api.get<Endereco>(`${CEPS_API_URL}/${cep}`)
  }

  public getAddressById(id: number){
    return this.api.get<Endereco>(`${CEPS_API_URL}/id/${id}`)
  }

  public setAddress(cep: Endereco){
    return this.api.post<Endereco>(`${CEPS_API_URL}/add`,cep)
  }

  public deleteAddress(id: number){
    return this.api.delete(`${CEPS_API_URL}/delete/${id}`);
  }
}