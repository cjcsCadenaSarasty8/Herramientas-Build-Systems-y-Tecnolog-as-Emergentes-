import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraInicioComponent } from './barra-inicio/barra-inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
import { CarroComprasComponent } from './carro-compras/carro-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraInicioComponent,
    InicioSesionComponent,
    CatalogoComponent,
    VerMasComponent,
    CarroComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
