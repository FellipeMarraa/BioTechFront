import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ExercicioService} from '../../services/domain/exercicio.service';
import {ExercicioDTO} from '../../models/exercicio.dto';
import {StorageService} from '../../services/storage.service.';
import {API_CONFIG} from '../../config/api.config';

@Component({
    selector: 'app-exercicio',
    templateUrl: './exercicios.page.html',
    styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {
    items: ExercicioDTO[];
    imgUrl: string = API_CONFIG.imgBaseUrl;

    constructor(public navCtrl: NavController,
                public storage: StorageService,
                public exercicioService: ExercicioService) {
    }

    ngOnInit(): void {
        // this.items = [
        //     {
        //         id: '1',
        //         nome: 'rosca Direta'
        //     },
        //     {
        //         id: '2',
        //         nome: 'rosca testa'
        //     }
        // ];

        let localStorage = this.storage.getLocalUser();
        this.exercicioService.findByCategoria(localStorage.id).subscribe(response => {
            this.items = response['exercicios'];

        }, error => {
            console.log(error);
        });
    }

}
