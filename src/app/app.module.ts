import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CategoriaService} from 'src/services/domain/categoria.service';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service.';
import {ClienteService} from '../services/domain/cliente.service';
import {ExercicioService} from '../services/domain/exercicio.service';
import { CriarListaService } from 'src/services/domain/criarlista.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        CategoriaService,
        AuthService,
        StorageService,
        ClienteService,
        ExercicioService,
        CriarListaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
