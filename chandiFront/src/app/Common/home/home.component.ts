import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _router: any;

  constructor(private_router:Router) { }

  ngOnInit() {
  }
  moveToLogin(){
    this._router.navigate(['/login']);
    
  }
  
}
