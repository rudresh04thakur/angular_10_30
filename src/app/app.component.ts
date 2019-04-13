import { Component,OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AllService } from './all.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _ser:AllService, private _r:Router){}
  username;
  ngOnInit(){
    this._r.events.subscribe(()=>{
      this._ser.checkLife(localStorage.getItem("sid")).subscribe((res)=>{
        this.username= res['user']['FullName'];
      });
    })
    this._ser.checkLife(localStorage.getItem("sid")).subscribe((res)=>{
      this.username= res['user']['FullName'];
    });
    console.log("App = >",this.username)
  }
  title = 'client';
}
