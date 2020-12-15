import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Todo[] = [];
  url = environment.apiUrl + environment.endpoints.todos;

  constructor(private http: HttpClient) {
    console.log('todo service');
  }

  agregarTarea(tarea: Todo) {
    return this.http.post<Todo[]>(this.url, tarea);
  }

  actualizarTarea(tarea: Todo) {
    const url = this.url + '/' + tarea.id;
    return this.http.put(url, tarea);
  }

  eliminarTarea(tareaId: number) {
    const url = this.url + '/' + tareaId;
    return this.http.delete(url);
  }

  obtenerTareas() {
    return this.http.get<Todo[]>(this.url);
  }

  obtenerTarea(id: number) {
    return this.http.get<Todo>(this.url + '/' + id);
  }

  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }
}
