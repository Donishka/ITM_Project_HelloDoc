import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';

@Component({
    selector: 'register2',
    templateUrl: 'register2.component.html'
})

export class Register2Component implements OnInit {

    form;

    constructor(
        private fb: FormBuilder,
        private regService: RegisterService
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
            wordAddress: ['', Validators.required],
            docRegNumber: ['', Validators.required],
            docField: ['', Validators.required],
            designation: ['', Validators.required],

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
        this.regService.docRegister(user)
            .subscribe(res=>{
                if(res.json().success){
                    //route user somewhere
                }else{
                    //show error message
                }
            })
    }

}