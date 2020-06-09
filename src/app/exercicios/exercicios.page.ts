import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {ExercicioService} from '../../services/domain/exercicio.service';
import {ExercicioDTO} from '../../models/exercicio.dto';
import {StorageService} from '../../services/storage.service.';

@Component({
    selector: 'app-exercicio',
    templateUrl: './exercicios.page.html',
    styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {

    items: ExercicioDTO[];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: StorageService,
                public exercicioService: ExercicioService) {
    }

    ngOnInit(): void {
        let localStorage = this.storage.getLocalUser();
        this.exercicioService.findByCategoria(localStorage.id).subscribe(response => {
            this.items = response['content'];
        });


        this.items = [
            // {
            //     id: '1',
            //     nome: 'rosca Direta'
            // },
            // {
            //     id: '2',
            //     nome: 'rosca testa'
            // }
        ];
    }


    ionViewDidLoad() {
        // Teste par ver se o back esta funcionando
        // Testar essa requisição no postman localHost:8080/exercicios?categoria=2

    }

}
