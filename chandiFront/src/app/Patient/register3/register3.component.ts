import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterService} from '../../shared/services/register.service'


@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  form;

  constructor(private _router: Router, fb: FormBuilder, private patientRegService:RegisterService) {
    this.form = fb.group({

      patientId: ['', Validators.required],
      dob:['', Validators.required] ,
      occupation:['', Validators.required] ,
      bloodType:['', Validators.required] ,
      maritalState:['', Validators.required] ,
      height:['', Validators.required] ,
      weight:['', Validators.required] ,
      nic:['', Validators.required] ,


    });
  }

  ngOnInit() {
  }

  onSubmit(form){
    let user = form.value;
    this.patientRegService.patientRegister(user)
        .subscribe(res=>{
            if(true){
                //route user somewhere
            }else{
                //show error message
            }
        })
}

  moveToLogin() {
    this._router.navigate(['/login']);
  }


}