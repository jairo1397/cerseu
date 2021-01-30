import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'email-validation-tutorial';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('',
      Validators.required,
    )
  });

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  get primEmail(){
    return this.userEmails.get('primaryEmail');
  }

  // tslint:disable-next-line:typedef
  get passwrd(){
    return this.userEmails.get('password');
  }

}
