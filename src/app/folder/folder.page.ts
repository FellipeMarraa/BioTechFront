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
        if (this.erros.length == 0) {
            this.navCtrl.navigateRoot('/categorias');
        }
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
        this.clienteService.findAll().subscribe(resp => {
            if (resp) {
                resp.forEach(respItem => {
                    if (respItem.email == this.credenciais.email) {
                        if (this.erros.length == 0) {
                            this.navCtrl.navigateRoot('/categorias');
                        }
                    }
                });
            }
        });
    }

    ionViewWillEnter() {
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        this.menu.enable(true);
    }
}
