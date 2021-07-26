import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(email: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/pathValidazioneLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('email',email);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('email')
  }
}
