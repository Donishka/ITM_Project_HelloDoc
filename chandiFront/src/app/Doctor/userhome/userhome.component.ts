import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  moveToViewPatient(){
    this._router.navigate(['/searchp']);
  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

  moveToDirectMessage(){
    this._router.navigate(['/message']);
  }


}
