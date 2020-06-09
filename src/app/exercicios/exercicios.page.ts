import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ExercicioService} from '../../services/domain/exercicio.service';
import {ExercicioDTO} from '../../models/exercicio.dto';

@Component({
    selector: 'app-exercicio',
    templateUrl: './exercicios.page.html',
    styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {

    items: ExercicioDTO[];

    constructor(public navCtrl: NavController,
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
    }


    ionViewDidLoad() {
        //Teste par ver se o back esta funcionando
        //Testar essa requisição no postman localHost:8080/exercicios?categoria=2
        // let id_categoria = this.navparams.get('id_categoria');
        // this.exercicioService.findByCategoria(id_categoria).subscribe(response => {
        //     this.items = response['content'];
        // });
    }

}
