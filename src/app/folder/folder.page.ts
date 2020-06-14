import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';
import {CredenciaisDTO} from '../../models/credenciais.dto';
import {AuthService} from '../../services/auth.service';
import {ClienteService} from '../../services/domain/cliente.service';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;

    credenciais: CredenciaisDTO = {
        email: '',
        senha: ''
    };
    erros: string [] = [];


    constructor(private activatedRoute: ActivatedRoute,
                public navCtrl: NavController,
                public clienteService: ClienteService,
                public auth: AuthService,
                public menu: MenuController) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }


    login() {
        this.validation();

    }

    loginSemCadastro() {
        this.navCtrl.navigateRoot('/categorias');
    }

    cadastra() {
        console.log('to aqui');
        this.navCtrl.navigateRoot('/cadastro');
    }

    validation() {
        this.erros = [];
        if (this.credenciais.email == '' || this.credenciais.senha == '') {
            this.erros.push('*Email ou senha invalidos');
        }

        else if (this.credenciais.email != 'fellipemarra@hotmail.com' && this.credenciais.senha != '123') {
            this.erros.push('*Senha invalida');
        }

        else if(this.erros.length == 0) {
            this.navCtrl.navigateRoot('/catlog');
        }
    }

    ionViewWillEnter() {
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        this.menu.enable(true);
    }
}
