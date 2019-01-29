import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: Http
  ) { }

  docRegister(user: any) {
    console.log(user);
    return this.http.post("http://localhost:3000/doctor/addDoctor", user ).pipe(map(res => 
    console.log(res.json())));
  }

}


