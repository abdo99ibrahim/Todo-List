import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({});
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin=this._formBuilder.group({
      Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength  (20)]]
    });
  }

  login():void{
    alert(JSON.stringify(this.formLogin.value))
  }

  isValidControl(name:string):boolean{
    return this.formLogin.controls[name].valid;
  }
  isInValidAndTouched(name:string):boolean
  {
    return  this.formLogin.controls[name].invalid && (this.formLogin.controls[name].dirty || this.formLogin.controls[name].touched);
  }
  isControlHasError(name:string,error:string):boolean{
    return this.formLogin.controls[name].invalid && this.formLogin.controls[name].errors?.[error];
  }
}
