import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo.model';
import Swal from 'sweetalert2';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  tarea: Todo = { id: 0, descripcion: '', hecho: false };

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.todoService.obtenerTarea(params.id).subscribe(
        (response) => {
          this.tarea = response;
        },
        (error) => {
          if (error.status > 400) {
            this.router.navigateByUrl('/lista');
          }
        }
      );
    });
  }

  ngOnInit(): void {}

  actualizarTarea() {
    if (!this.tarea.descripcion) {
      Swal.fire('', 'Debe ingresar una descripción', 'warning');
      return;
    }
    this.todoService.actualizarTarea(this.tarea).subscribe(() => {
      Swal.fire('', 'La tarea se actualizó correctamente', 'success').then(
        () => {
          this.router.navigateByUrl('/lista');
        }
      );
    });
  }
}
