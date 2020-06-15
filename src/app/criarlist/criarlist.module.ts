import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CriarlistRoutingModule} from './criarlist-routing.module';
import {CriarlistPage} from './criarlist.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CriarlistRoutingModule
    ],
    declarations: [CriarlistPage]
})
export class CriarlistPageModule {
}
