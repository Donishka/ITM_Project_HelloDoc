import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private router: Router,
    ){ }

    register(user){
        console.log(user);
        return this.http.post("http://blooming-dusk-12909/register", {user});
    }

    login(user){
        console.log(user);
        return this.http.post("http://blooming-dusk-12909/login", {user});
    }

}