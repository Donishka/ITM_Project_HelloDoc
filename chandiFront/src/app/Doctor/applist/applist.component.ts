import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToViewPatient(){
    this._router.navigate(['/searchp']);
  }

 


  moveToUserPage(){
    this._router.navigate(['/user']);
  }
  
  moveToShedule(){
    this._router.navigate(['/calender']);
  }
  
}