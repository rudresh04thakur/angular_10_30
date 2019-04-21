import { Component,OnInit,Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AllService } from './all.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _ser:AllService, private _r:Router,private _ar:ActivatedRoute){}
  @Output('username') username;
  demoJson = {
    name:"Gopal",
    age:26,
    contact:"1234556"
  }
  url;
  ngOnInit(){
    this._r.events.subscribe(()=>{
      this._ser.isUrlSet.subscribe(url => {
        this.url = url
        //console.log("Service url ",url)
      })
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
