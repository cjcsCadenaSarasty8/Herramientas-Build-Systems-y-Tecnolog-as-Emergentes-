import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { barranavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

import {HttpService} from './http.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    barranavegacionComponent,
    InicioSesionComponent,
    CatalogoComponent,
    VerMasComponent,
    CarroComprasComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path:'',
        component:InicioSesionComponent
      },
      {
        path:'login',
        component:InicioSesionComponent
      },
      {
        path:'catalogo',
        component:CatalogoComponent
      },
      {
        path:'carrocompras',
        component:CarroComprasComponent
      },
      {
        path:'vermas/:id',
        component:VerMasComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
