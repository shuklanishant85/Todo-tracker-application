import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'nishant'
  password = ''
  invalidCredErrorMsg = 'Invalid Credential'
  invalidCred = false


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log('validating creds for user: ' + this.username);
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      sessionStorage.setItem('authenticatedUser', this.username);
      this.invalidCred = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidCred = true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username])
          this.invalidCred = false
        }, error => {
          console.log(error)
          this.invalidCred = true
        }
      )
  }
}
