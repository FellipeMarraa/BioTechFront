import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_CONFIG} from 'src/config/api.config';
import {CategoriaDTO} from 'src/models/categoria.dto';

@Injectable()
export class ExercicioService {

    constructor(public http: HttpClient) {

    }

    findByCategoria(categoria_id: string) {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias/categoria_id`);
    }
}
