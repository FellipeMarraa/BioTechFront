import {Component, OnInit} from '@angular/core';
import {CategoriaService} from 'src/services/domain/categoria.service';
import {CategoriaDTO} from 'src/models/categoria.dto';
import {API_CONFIG} from 'src/config/api.config';
import {NavController} from '@ionic/angular';
import {StorageService} from '../../services/storage.service.';
import {LocalUser} from '../../models/local_user';

@Component({
    selector: 'app-categorias',
    templateUrl: './catlog.page.html',
    styleUrls: ['./catlog.page.scss'],
})
export class CatlogPage implements OnInit {
    imgUrl: string = API_CONFIG.imgBaseUrl;
    items: CategoriaDTO[];

    constructor(public categoriaService: CategoriaService,
                public storage: StorageService,
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
        let local: LocalUser = {
            id: categoria_id,
            nome: 'tt',
            token: ''
        };

        this.storage.setLocalUser(local);
        this.navCtrl.navigateRoot('/exercicios');
    }
    criarlist(){
        this.navCtrl.navigateRoot('/criarlist');
    }


}
