import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from 'src/config/api.config';
import {Observable} from 'rxjs';
import {CategoriaDTO} from 'src/models/categoria.dto';
import {ClienteDto} from '../../models/cliente.dto';

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient) {

    }

    insert(cliente: ClienteDto) {
//esse metodo tem que bater la no back e salvar o cliente
    }


    //
    // findAll() : Observable<CategoriaDTO[]> {
    //     return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    // }
}
