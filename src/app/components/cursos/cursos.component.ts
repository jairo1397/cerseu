import { Component } from '@angular/core';
import { CursosService, Curso } from '../../services/cursos.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos:Curso[]=[];
  constructor( private _cursosService:CursosService,
    private router:Router) { }

  ngOnInit() {
    this.cursos=this._cursosService.getCursos();
  }

  verCurso( idx:number){
    this.router.navigate(['/curso',idx])
    // console.log(idx);
  }

}
