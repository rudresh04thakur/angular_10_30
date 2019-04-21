import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private _fb:FormBuilder, private _r:Router,private _ser:AllService) {
    this.loginForm = this._fb.group({
      email:[],
      password:[]
    })
   }

  ngOnInit() {
    this._ser.changeUrl("false");
    // this._ser.isUrlSet.subscribe(url => {
    //   //console.log("Service Loing url ",url)
    // })
  }

  login(data){
    this._ser.login(data).subscribe((res)=>{
      if(res['class']=="success"){
        localStorage.setItem("sid",res['user']['sid'])
        //console.log(res['user']);
        this._r.navigate(['/']);
      }
    })
    //this._r.navigate(['register']);

  }
}
