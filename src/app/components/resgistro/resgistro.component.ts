import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styleUrls: ['./resgistro.component.css']
})
export class ResgistroComponent implements OnInit {

  registro = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]
    ),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(10)]
    )
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get primEmail(){
    return this.registro.get('primaryEmail');
  }

  // tslint:disable-next-line:typedef
  get passwrd(){
    return this.registro.get('password');
  }

  // tslint:disable-next-line:typedef
  get usernam(){
    return this.registro.get('username');
  }

}
