import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ClienteService} from '../../services/domain/cliente.service';
import {clienteDTO} from '../../models/cliente.dto';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    cliente: clienteDTO = {
        id: null,
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        telefone: ''
    };
    errosTotal: string [] = [];
    errosNome: string [] = [];
    errosEmail: string [] = [];
    errosSenha: string [] = [];
    errosConfirmeSenha: string [] = [];
    errosTelefone: string [] = [];

    constructor(public navCtrl: NavController,
                public clienteService: ClienteService) {
    }

    ngOnInit(): void {
    }


    efetuaCadastro() {
        this.validation();

        this.clienteService.insert(this.cliente).subscribe(request => {
            if (request) {
                console.log('cadastro efetuado com sucesso');
            } else {
                console.log('cadastro falho');
            }

        });

        if (this.errosTotal.length == 0) {
            this.navCtrl.navigateRoot('/folder/Inbox');
        }
    }


    validation(): boolean {
        this.errosTotal = [];
        if (this.cliente.nome == '') {
            this.errosNome.push('*Nome é Obrigatorio');
            this.errosTotal.push('*Nome é Obrigatorio');
        }

        if (this.cliente.email == '') {
            this.errosEmail.push('*Email é Obrigatorio');
            this.errosTotal.push('*Email é Obrigatorio');
        }

        if (this.cliente.senha == '') {
            this.errosSenha.push('*Senha é Obrigatorio');
            this.errosTotal.push('*Senha é Obrigatorio');
        }

        if (this.cliente.telefone == '') {
            this.errosTelefone.push('*Telefone é Obrigatorio');
            this.errosTotal.push('*Telefone é Obrigatorio');
        }

        if (this.cliente.senha != this.cliente.confirmaSenha) {
            this.errosConfirmeSenha.push('*As senhas não conferem');
            this.errosTotal.push('*As senhas sao diferentes');
        }
        if (this.errosTotal.length > 0) {
            return false;
        }
        return true;
    }

}
