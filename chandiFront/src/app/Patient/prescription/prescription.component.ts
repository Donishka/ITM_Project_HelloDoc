import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() { 
  }

  moveToBasicInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPatientProfile(){
    this._router.navigate(['/patientprofile']);
    
  }

  
  moveToCurrentState(){
    this._router.navigate(['/currentstate']);
    
  }

  
  moveToLabReports(){
    this._router.navigate(['/lab']);
    
  }
}