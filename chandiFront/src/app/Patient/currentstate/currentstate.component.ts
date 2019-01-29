import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate',
  templateUrl: './currentstate.component.html',
  styleUrls: ['./currentstate.component.css']
})
export class CurrentstateComponent implements OnInit {

  constructor(private _router:Router) { }

  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
  }

  moveToBasicInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPrescription(){
    this._router.navigate(['/prescription']);
    
  }

  
  moveToPatientProfile(){
    this._router.navigate(['/patientprofile']);
    
  }

  
  moveToLabReports(){
    this._router.navigate(['/lab']);
    
  }


  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}




 