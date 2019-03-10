import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AllService } from '../all.service';
import { Router, ActivatedRoute } from '@angular/router'
import * as $ from 'jquery';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm = {
    FullName:'',
    Email:'',
    MobileNo:'',
    State:'',
    Comment:'',
    Agree:''
  }


  regF:FormGroup;
  constructor(private _fb:FormBuilder,
              private _ser:AllService,
              private _ar:ActivatedRoute,
              private _r:Router) {
    this.regF = this._fb.group({
      FullName:['',[Validators.required,Validators.pattern("[a-zA-Z]{3,}[ ]{1}[a-zA-Z]{3,}")]],
      Email:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]{3,}[@]{1}[a-zA-Z0-9]{3,}[.]{1}[a-zA-Z0-9]{2,}")]],
      MobileNo:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      State:['',[Validators.required]],
      Comment:['',[]],
      Agree:['',[]]
    })
  }

  ngOnInit() {
    this.res = {}
    // $(document).ready(function(){
    //   $('.pagination>.page-item').click(function(){
    //       $(this).addClass("gopal_active");
    //       $(".pagination>.page-item").not(this).removeClass("gopal_active");
    //     });
    //   });
  }
  str ="";
  getFormValidationErrors() {
    Object.keys(this.regF.controls).forEach(key => {
    const controlErrors: ValidationErrors = this.regF.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            this.str +='Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError];
          });
        }
      });
    }
  res;
  Register(data){
    //this.getFormValidationErrors()
    this._ser.regiter(data).subscribe(
      res=>{
      console.log("Inner",res);
      this.setResult(res)
      },
      error=>{
        this.setResult(error);
      }
    )
  }
  setResult(res){
    this.res=res;
    $('#msgModal').fadeIn(300);
    //$('#msgModal').model('show');
    console.log(res);
  }
  closeModel(){
    $('#msgModal').fadeOut(300);
    this._r.navigate(["/home"]);
  }
}
