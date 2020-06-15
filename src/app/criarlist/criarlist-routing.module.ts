import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CriarlistPage} from './criarlist.page';

const routes: Routes = [
    {
        path: '',
        component: CriarlistPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CriarlistRoutingModule {
}
