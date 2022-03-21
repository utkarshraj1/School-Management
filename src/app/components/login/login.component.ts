import { Component, OnInit } from '@angular/core';
import { ILoginCredentials } from './models/loginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Catches the loginCredentials event from Form components and gets the login credentials, returns void
   * @param credentials - contains credential object of type ILoginCredentials
   */
  loginCredentialsHandler(credentials: ILoginCredentials): void {
    console.log('In parent Login Component');
    console.log(credentials);
  }

}
