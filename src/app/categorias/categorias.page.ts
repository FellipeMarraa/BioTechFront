import {Component, OnInit} from '@angular/core';
import {CategoriaService} from 'src/services/domain/categoria.service';
import {CategoriaDTO} from 'src/models/categoria.dto';
import {API_CONFIG} from 'src/config/api.config';
import {ExercicioDTO} from '../../models/exercicio.dto';
import {NavController, NavParams} from '@ionic/angular';
import {Params} from '@angular/router';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.page.html',
    styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
    imgUrl: string = API_CONFIG.imgBaseUrl;
    items: CategoriaDTO[];

    //==================================Ignora pois o Bruno nao tem banco de dados na maquina
    exercicio1: ExercicioDTO = {
        id: '1',
        nome: 'Rosca Direta'
    };

    item1: CategoriaDTO = {
        id: '1',
        nome: 'Alongamento',
        exercicios: [this.exercicio1]
    };

    item2: CategoriaDTO = {
        id: '2',
        nome: 'Abdominais',
        exercicios: []
    };

    item3: CategoriaDTO = {
        id: '3',
        nome: 'Bicbs',
        exercicios: [this.exercicio1]
    };

    item4: CategoriaDTO = {
        id: '4',
        nome: 'Tricbs   ',
        exercicios: []
    };

//====================================================================================
    constructor(public categoriaService: CategoriaService,
                public navCtrl: NavController) {
    }

    ngOnInit() {
        this.items = [];
        // this.items.push(this.item1, this.item2, this.item3, this.item4);
        this.categoriaService.findAll().subscribe(response => {
            this.items = response;
        }, error => {
            console.log(error);
        });
    }


    showExercicios(categoria_id: string) {
        //Tenho que descobrir como que passa essa atributo pela url
        this.navCtrl.navigateRoot('/exercicios');
    }


}
