import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private _ser:AllService, private _ar:ActivatedRoute) { }
  user:any;
  keys:any;
  ngOnInit() {
    this._ser.getUser(this._ar.snapshot.params.id).subscribe((res)=>{
      this.user = res;
      this.keys = Object.keys(res);
      console.log(this.keys)
    })
  }

}
