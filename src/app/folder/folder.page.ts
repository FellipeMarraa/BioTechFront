import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuController, NavController} from '@ionic/angular';
import {CredenciaisDTO} from '../../models/credenciais.dto';
import {AuthService} from '../../services/auth.service';

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
                public auth: AuthService,
                public menu: MenuController) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

    validation() {
        if (this.credenciais.email == '' || this.credenciais.senha == '') {
            this.erros.push('*Email ou senha invalidos');
        }
    }

    login() {
        this.validation();
        //ao descomentar esse metodo ele tem que bater la no back e fazer a validaçao
        // this.auth.authenticate(this.credenciais).subscribe(response => {
        //     this.auth.sucessfullLogin(response.headers.get('Authorization'));
        //     console.log(response.headers.get('Authorization'));
        // });
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


    ionViewWillEnter() {
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        this.menu.enable(true);
    }
}
