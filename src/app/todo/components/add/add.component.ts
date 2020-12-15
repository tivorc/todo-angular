import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import Swal from 'sweetalert2';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @Output()
  update = new EventEmitter();

  descripcionInput = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  agregarTarea() {
    const tarea: Todo = {
      id: this.todoService.generarId(),
      descripcion: this.descripcionInput,
      hecho: false,
    };
    this.todoService.agregarTarea(tarea).subscribe(
      () => {
        Swal.fire('Correcto', 'Se agregó la tarea ' + tarea.id, 'success').then(
          () => {
            this.descripcionInput = '';
          }
        );
        this.update.emit();
      },
      () => {
        Swal.fire('Error', 'Ocurrió un error al agregar la tarea', 'error');
      }
    );
  }
}
