import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private _fb:FormBuilder, private _r:Router) {
    this.loginForm = this._fb.group({
      email:[],
      password:[]
    })
   }

  ngOnInit() {
  }

  login(data){
    console.log(data);
    this._r.navigate(['register']);

  }
}
