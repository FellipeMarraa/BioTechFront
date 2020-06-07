import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController, MenuController} from '@ionic/angular';
import {CredenciaisDTO} from '../../models/credenciais.dto';

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


    constructor(private activatedRoute: ActivatedRoute, public navCtrl: NavController, public menu: MenuController) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

    login() {
        console.log(this.credenciais);
        this.navCtrl.setDirection('root');
    }

    cadastra() {
        //dados estao chegando aqui normalmente;
        console.log(this.credenciais);
        // this.navCtrl.setDirection('root');
    }


    ionViewWillEnter() {
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        this.menu.enable(true);
    }
}
