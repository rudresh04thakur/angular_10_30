import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  users:any;
  date;
  constructor(private _ser:AllService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.date = this.datePipe.transform('03/17/2019 04:30:34 UTC +0');
    this._ser.getUsers().subscribe((res)=>{
      this.users = res;
    });
  }

  delete(id){
    this._ser.delete(id).subscribe((res)=>{
      this._ser.getUsers().subscribe((res)=>{
        this.users = res;
      });
    })
  }

}
