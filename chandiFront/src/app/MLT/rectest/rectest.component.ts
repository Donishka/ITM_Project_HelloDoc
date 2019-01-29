import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rectest',
  templateUrl: './rectest.component.html',
  styleUrls: ['./rectest.component.css']
})
export class RectestComponent implements OnInit {

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