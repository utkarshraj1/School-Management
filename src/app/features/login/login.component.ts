import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudMethodsService } from 'src/app/shared/services/crud-methods.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';
import { ILoginCredentials } from './models/loginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private crudMethods: CrudMethodsService,
    private dataService: DataServiceService,
    private shared: SharedMethodsService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  /**
   * Catches the login details and routes to appropriate feature
   * @param loginDetails An object of type ILoginCredentials
   */
  loginCredentialsHandler(loginDetails: ILoginCredentials): void {
    const role = loginDetails.roles[0];
    this.setTokens(loginDetails);
    let navigationUrl = '';
    switch (role) {
      case 'ADMIN':
        navigationUrl = '/analyst';
        break;
      case 'STUDENT':
        navigationUrl = '/student';
        break;
      case 'TEACHER':
        navigationUrl = '/teacher';
        break;
      case 'SUPER':
        navigationUrl = '/super';
        break;
      case 'ACCOUNTS':
        navigationUrl = '/accounts';
        break;
    }
    this.router.navigate([navigationUrl]);
  }

  /**
   * Sets the tokens in the localStorage
   * @param loginDetails An object of type ILoginCredentials
   */
  setTokens(loginDetails: ILoginCredentials): void {
    localStorage.setItem('idToken', loginDetails.tokenDetails.idToken);
    localStorage.setItem(
      'refreshToken',
      loginDetails.tokenDetails.refreshToken,
    );
  }
}
