import { Component } from '@angular/core';
import { ActivatedRoute   } from "@angular/router";
import { CursosService } from "../../services/cursos.service";
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent  {

curso: any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _cursosService: CursosService,) { 

    this.activatedRoute.params.subscribe(params =>{
      this.curso = this._cursosService.getCurso(params['id']);
      console.log(this.curso);
    });
  }



}
