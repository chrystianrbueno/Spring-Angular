import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';
import { UsuarioCadastrado, UsuarioCadastro } from '../models/usuario.model';
import { USERS_API_URL } from '../utils/rest';
import { ConsultaPaginada } from '../models/consultapaginada.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private api: RestapiService) { }

  public buscarTodos(){
    return this.api.get<ConsultaPaginada>(USERS_API_URL)
  }

  public cadastrar(usuario: UsuarioCadastro ){
    return this.api.post<UsuarioCadastrado>(USERS_API_URL,usuario)
  }

}
