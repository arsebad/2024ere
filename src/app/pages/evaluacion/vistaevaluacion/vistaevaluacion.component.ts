import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Evaluacion } from '../../../app.evaluacion.interface.js';
import { NavComponent } from '../../template/nav/nav.component.js';


@Component({
  selector: 'app-vistaevaluacion',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './vistaevaluacion.component.html',
  styleUrl: './vistaevaluacion.component.scss'
})
export class VistaevaluacionComponent {

  evaluaciones: Evaluacion[] = [];

  constructor() { }

  ngOnInit(): void {
      // Aquí normalmente obtendrías los datos de una API o de otro servicio
      // Por simplicidad, aquí se simula la carga de datos
      this.evaluaciones = [
          { descripcion: 'Evaluación 1', comentario: 'Comentario 1', fecha: '2024-07-04', total: 85, visible: true, estado: false },
          { descripcion: 'Evaluación 2', comentario: 'Comentario 2', fecha: '2024-07-05', total: 92, visible: false, estado: true },
          // Más datos...
      ];
  }


}
