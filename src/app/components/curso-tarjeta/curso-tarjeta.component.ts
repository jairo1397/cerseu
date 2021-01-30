import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-curso-tarjeta',
  templateUrl: './curso-tarjeta.component.html',
  styleUrls: ['./curso-tarjeta.component.css']
})
export class CursoTarjetaComponent implements OnInit {

@Input() curso: any={};
@Input() index?: number;

@Output() cursoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.cursoSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }
  verCurso(){
  //   console.log(this.index);
    this.router.navigate(['/curso',this.index])
  // this.cursoSeleccionado.emit(this.index);
}

}
