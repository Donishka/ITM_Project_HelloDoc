import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private router: Router,
    ){ }

    

    register(user: any) {
        console.log(user);
        return this.http.post("http://localhost:3000/users/addUsers", user ).pipe(map(res => 
        console.log(res.json())));
      }

    login(user){
        console.log(user);
        return this.http.post("http://blooming-dusk-12909/login", {user});
    }


    
}