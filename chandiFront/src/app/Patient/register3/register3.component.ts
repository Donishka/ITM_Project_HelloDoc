import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    homeaddress:new FormControl(null,Validators.required),
    //contactnumber:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)
  })
  constructor(private _router:Router,) { }

  ngOnInit() {
  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }

 
}