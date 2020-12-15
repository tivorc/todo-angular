import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-lista-page',
  templateUrl: './lista-page.component.html',
  styleUrls: ['./lista-page.component.css'],
})
export class ListaPageComponent implements OnInit {
  todos: Observable<Todo[]> = new Observable<Todo[]>();

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.obtenerTareas();
  }

  ngOnInit(): void {}

  update() {
    this.todos = this.todoService.obtenerTareas();
  }

  eliminarTarea(id: number) {
    this.todoService.eliminarTarea(id).subscribe((res) => {
      this.update();
    });
  }

  actualizarTarea(tarea: Todo) {
    this.todoService.actualizarTarea(tarea).subscribe((response) => {
      console.log(response);
      // this.update();
    });
  }
}
