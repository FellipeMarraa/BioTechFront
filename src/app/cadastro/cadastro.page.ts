import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ClienteDto} from '../../models/cliente.dto';
import {ClienteService} from '../../services/domain/cliente.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


    cliente: ClienteDto = {
        nome: '',
        email: '',
        senha: ''
    };

    constructor(public navCtrl: NavController,
                public clienteService: ClienteService) {
    }

    ngOnInit(): void {
    }


    efetuaCadastro() {
        console.log(this.cliente);

        this.clienteService.insert(this.cliente);
        this.navCtrl.navigateRoot('/folder/Inbox');
    }


}
