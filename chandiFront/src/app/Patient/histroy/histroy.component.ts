import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-histroy',
  templateUrl: './histroy.component.html',
  styleUrls: ['./histroy.component.css']
})
export class HistroyComponent implements OnInit {
  constructor(private _router:Router) { }
  ngOnInit() { 
  }

  moveToBasicHealthInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPrescription(){
    this._router.navigate(['/prescription']);
    
  }

  
  moveToCurrentState(){
    this._router.navigate(['/currentstate']);
    
  }

  
  moveToLabReports(){
    this._router.navigate(['/lab']);
    
  }

  moveToMakeAppointment(){
    this._router.navigate(['/makeapp']);
    
  }

  moveToPatientHome(){
    this._router.navigate(['/patientprofile']);
    
  }

  moveToDiseaseHistroy(){
    this._router.navigate(['/histroy']);
    
  }

}
