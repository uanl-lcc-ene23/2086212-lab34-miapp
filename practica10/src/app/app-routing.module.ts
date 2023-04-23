import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { BuscarComponent } from './buscar/buscar.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: ProductosComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'buscar',
    component: BuscarComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
