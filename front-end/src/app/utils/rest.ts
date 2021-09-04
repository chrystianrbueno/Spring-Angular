import { environment } from '../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs';

export const USERS_API_URL = environment.apiUsuario;
export const CEPS_API_URL = environment.apiCeps;

export function tratadorDeErros(erro: HttpErrorResponse){
    let msg = '';
    if(erro.error instanceof ErrorEvent){
        //erro do lado do cliente
        msg = `Ocorreu um erro: ${erro.error.message}`
    }else{
        //erro do lado do servidor
        msg = `O servidor retornou um erro: ${erro.status} - ${erro.statusText}`;
    }

    return throwError (
        {
            erro: erro.error,
            mensagem: msg,
            mensagemOriginal: erro.message
        }
    );
}