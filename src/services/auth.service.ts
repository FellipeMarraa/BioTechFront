import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CredenciaisDTO} from '../models/credenciais.dto';
import {API_CONFIG} from 'src/config/api.config';
import {StorageService} from './storage.service.';
import {LocalUser} from '../models/local_user';


@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage: StorageService) {
    }

    authenticate(credenciais: CredenciaisDTO) {
        //vai la no back e valida o login
         return this.http.post(API_CONFIG.baseUrl + '/login', credenciais, {
             observe: 'response', responseType: 'text'
         });
    }

    sucessfullLogin(authorizationValue: string) {
         let tok = authorizationValue.substring(7);
         let user: LocalUser = {
             id:"",
             nome:"",
             token: tok
         };
         this.storage.setLocalUser(user);
    }

    logout() {
    this.storage.setLocalUser(null);
    }


}
