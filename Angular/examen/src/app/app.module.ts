import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    BarraNavegacionComponent,
    CatalogoComponent,
    CarroComprasComponent,
    VerMasComponent,
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
        path:'vermas',
        component:VerMasComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
