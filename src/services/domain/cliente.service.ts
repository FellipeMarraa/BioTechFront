import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from 'src/config/api.config';
import {Observable} from 'rxjs';
import {CategoriaDTO} from 'src/models/categoria.dto';
import {ClienteDto} from '../../models/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(public http: HttpClient) {}

    insert(obj: ClienteDto) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    findByEmail(email: string): Observable<ClienteDto> {
        return this.http.get<ClienteDto>(API_CONFIG.baseUrl + '/clientes/email?value=${email}');
    }

    // findAll() : Observable<CategoriaDTO[]> {
    //     return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    // }
}
