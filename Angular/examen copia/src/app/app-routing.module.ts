import { NgModule }             from '@angular/core';
import { RouterModule, Routes}  from '@angular/router';

//import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {path:'', redirectTo: '/inicio-sesion', pathMatch: 'full'},
  {path:'login', redirectTo: '/inicio-sesion'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
