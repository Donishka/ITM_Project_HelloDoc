import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-registerm',
  templateUrl: './registerm.component.html',
  styleUrls: ['./registerm.component.css']
})
export class RegistermComponent implements OnInit {

  form;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService
  ) {
      this.form = fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [
              Validators.required,
              Validators.email
          ]],
          
          mobile: ['', Validators.required],
          nic: ['', Validators.required],
          address: ['', Validators.required],
          MltRegNo: ['', Validators.required],



          password: ['', [
              Validators.required,
              Validators.minLength(8)
          ]],
          cpassword: ['', [
              Validators.required,
          ]]
      });
  }

  ngOnInit() {

  }

  onSubmit(form){
      let user = form.value;
      this.authService.register(user)
          .subscribe(res=>{})
  }

}