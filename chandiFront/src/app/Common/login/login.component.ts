import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;

  constructor(
    private _router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) { 
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }



  ngOnInit() {
  }

  onSubmit(form){
    let user =  form.value;
    this.authService.login(user)
      .subscribe(res=>{
        if(res.json().success){
          //route to home page
        }else{
          //sshow error message
        }
      })
  }


  
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }




}