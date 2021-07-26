import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) {}


  public controlloLogin(){
    (this.loginservice.authenticate(this.email, this.password).subscribe(
      (data: any) => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      (error: any) => {
        this.invalidLogin = true

      }
    )
    );
  }

  ngOnInit(): void {}
}
