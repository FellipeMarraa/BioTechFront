import {ExerciciosDTO} from './exercicio.dto';

export interface CategoriaDTO {
    id: string;
    nome: string;
    exercicios: ExerciciosDTO[];
}
