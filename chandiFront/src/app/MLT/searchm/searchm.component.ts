import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchm',
  templateUrl: './searchm.component.html',
  styleUrls: ['./searchm.component.css']
})
export class SearchmComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() { 
  }
  
  moveToAbout(){
    this._router.navigate(['/mbasic']);
  }
  
   
  moveToPatientSearch(){
    this._router.navigate(['/searchm']);
    
  }
  moveToRecommandedTest(){
    this._router.navigate(['/rectest']);
    
  }
  
  
  }