import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoService } from './services/todo.service';

import { AddComponent } from './components/add/add.component';
import { ListaPageComponent } from './pages/lista-page/lista-page.component';
import { ListaComponent } from './components/lista/lista.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddComponent,
    ListaPageComponent,
    ListaComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [ListaPageComponent, DetalleComponent],
  providers: [TodoService],
})
export class TodoModule {}
