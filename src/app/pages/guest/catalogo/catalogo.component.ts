import { Component } from '@angular/core';
import { CursosService } from './../../../services/catalogo/cursos.service';
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

  filtro = '(Todos)';
  cursos: any[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
      this.cargarCursos();
  }

  cargarCursos(): void {
      // Simulamos obtener los cursos del servicio
      this.cursos = this.cursosService.getCursos();
  }

  mostrarDetalles(id: number): void {
      console.log('Mostrar detalles del curso con ID:', id);

  }

}
