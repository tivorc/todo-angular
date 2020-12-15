import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './todo/pages/detalle/detalle.component';
import { ListaPageComponent } from './todo/pages/lista-page/lista-page.component';

const routes: Routes = [
  { path: 'lista', component: ListaPageComponent },
  { path: 'todo/:id', component: DetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lista' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
