import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
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
                public storage: StorageService,
                public exercicioService: ExercicioService) {
    }

    ngOnInit(): void {
        let localStorage = this.storage.getLocalUser();
        this.exercicioService.findByCategoria(localStorage.id).subscribe(response => {
            this.items = response['exercicios'];
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
        });
    }

    backToCategoria(){
        this.navCtrl.navigateRoot('/categorias');
    }


    ionViewDidLoad() {
        // Teste par ver se o back esta funcionando
        // Testar essa requisição no postman localHost:8080/exercicios?categoria=2

    }

}
