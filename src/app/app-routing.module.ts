import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//inyectar todos los componentes para manejar las rutas
import {DashboardComponent} from './vistas/dashboard/dashboard.component';
import {NuevoComponent} from './vistas/nuevo/nuevo.component';
import {EditarComponent} from './vistas/editar/editar.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch:'full'},
  //rutas
  {path:'dashboard',component:DashboardComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'editar',component:EditarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exportando los componentes que tenemos en el router
//export const routingComponents = {DashboardComponent,NuevoComponent,EditarComponent}
