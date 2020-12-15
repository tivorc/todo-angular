import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit, DoCheck {
  @Input('todos')
  tareas: Todo[] = [];

  tareasCompletadas = 0;

  @Output()
  eliminarTodo = new EventEmitter();

  @Output()
  actualizarTodo = new EventEmitter();

  constructor() {}

  ngDoCheck(): void {
    this.tareasCompletadas = this.tareas?.filter((t) => t.hecho).length;
  }

  ngOnInit(): void {}

  seleccionar(tarea: Todo) {
    this.tareas.forEach((t) => {
      if (t.id === tarea.id) {
        t.hecho = !t.hecho;
        this.actualizarTodo.emit(t);
      }
    });
  }

  eliminarTarea(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Eliminarás la tarea ' + id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarTodo.emit(id);
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  redirigir() {}
}
