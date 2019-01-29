import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() { 
  }

  moveToBasicInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPrescription(){
    this._router.navigate(['/prescription']);
    
  }

  
  moveToCurrentState(){
    this._router.navigate(['/currentstate']);
    
  }

  
  moveToPatientProfile(){
    this._router.navigate(['/patientprofile']);
    
  }
}