import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    BarraNavegacionComponent,
    CatalogoComponent,
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
