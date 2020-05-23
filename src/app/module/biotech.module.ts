import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClienteCrudComponent} from './cliente/cliente.crud.component';
import {ClienteService} from './services/cliente.service';


const routes: Routes = [

  {path: 'cliente', component: ClienteCrudComponent, data: [{title: 'Listagem de Clientes'}]},
  {path: 'cliente/edit/:id', component: ClienteCrudComponent, data: [{title: 'Cadastro de Clientes'}]},
  {path: 'cliente/create', component: ClienteCrudComponent, data: [{title: 'Novo Cadastro de Cliente'}]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  declarations: [
    ClienteCrudComponent,
  ],
  providers: [
    ClienteService,
  ]
})
export class BiotechModule {

}
