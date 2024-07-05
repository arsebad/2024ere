import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos = [
    { id: 1, titulo: 'Curso 1', descripcion: 'Descripción del curso 1', imagen: 'imagen1.jpg', actualizacion: '2024-07-04' },
    { id: 2, titulo: 'Curso 2', descripcion: 'Descripción del curso 2', imagen: 'imagen2.jpg', actualizacion: '2024-07-05' },
    // Más cursos...
];

getCursos(): any[] {
    return this.cursos;
}

getCursoById(id: number): any {
    return this.cursos.find(curso => curso.id === id);
}
}
