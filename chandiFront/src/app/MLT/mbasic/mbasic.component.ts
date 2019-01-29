import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mbasic',
  templateUrl: './mbasic.component.html',
  styleUrls: ['./mbasic.component.css']
})
export class MbasicComponent implements OnInit {

  constructor(private _router:Router) { }

ngOnInit() { 
}

moveToMLTBasicInfo(){
  this._router.navigate(['/mbasic']);
}

 
moveToPatientSearch(){
  this._router.navigate(['/searchm']);
  
}
moveToRecommandedTest(){
  this._router.navigate(['/rectest']);
  
}


}