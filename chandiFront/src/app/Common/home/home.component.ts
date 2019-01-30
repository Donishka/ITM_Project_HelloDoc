import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToDoctorRegister(){
    this._router.navigate(['/register2']);
  }

 


  moveToPatientRegister(){
    this._router.navigate(['/register3']);
  }
  
  moveToMLTRegister(){
    this._router.navigate(['/registerm']);
  }
  
}