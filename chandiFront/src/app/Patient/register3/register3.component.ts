import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'


@Component({
    selector: 'app-register3',
    templateUrl: './register3.component.html',
    styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

    form;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private regPatient: RegisterService,
    ) {
        this.form = fb.group({
            patientId: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [
                Validators.required,
                Validators.email
            ]],

            mobile: ['', Validators.required],
            NIC: ['', Validators.required],
            address: ['', Validators.required],
            addStreet: ['', Validators.required],
            addCity: ['', Validators.required],
            weight: ['', Validators.required],
            height: ['', Validators.required],
            bloodType: ['', Validators.required],
            maritalState: ['', Validators.required],
            occupation: ['', Validators.required],
            dob: ['', Validators.required],
            roleId: ['001', Validators.required],



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

    onSubmit(form) {
        let user = form.value;
        this.authService.register(user).subscribe(res => { });
        this.regPatient.patientRegister(user).subscribe(res => { });
    }

}