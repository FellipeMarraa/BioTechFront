import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from 'src/config/api.config';
import {Observable} from 'rxjs';
import {clienteDTO} from '../../models/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(public http: HttpClient) {
    }

    insert(obj: clienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    findByEmail(email: string): Observable<clienteDTO> {
        return this.http.get<clienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

}
