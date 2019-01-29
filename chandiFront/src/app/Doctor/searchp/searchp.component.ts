import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css']
})
export class SearchpComponent implements OnInit {


  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

  moveToDirectMessage(){
    this._router.navigate(['/message']);
  }


  moveToUserPage(){
    this._router.navigate(['/user']);
  }
  
}
