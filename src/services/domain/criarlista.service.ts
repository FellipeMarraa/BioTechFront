import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CriarListDTO } from 'src/models/criarlist.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class CriarListaService{

    constructor(public http : HttpClient){

    }

    findAll() : Observable<CriarListDTO[]> {
        return this.http.get<CriarListDTO[]>(`${API_CONFIG.baseUrl}/exercicios`);
    }
}