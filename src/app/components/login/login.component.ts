import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudMethodsService } from 'src/app/shared/services/crud-methods.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';
import { ILoginCredentials } from './models/loginCredentials';
import { firebase_urls } from 'src/app/shared/static/important-urls';

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
    private router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Catches the loginCredentials event from Form components and gets the login credentials
   * and routes to the appropriate feature, returns void
   * @param credentials - contains credential object of type ILoginCredentials
   */
  // loginCredentialsHandler(credentials: ILoginCredentials): void {
  //   const { email, localId: id, idToken: tokenId, expiresIn } = credentials;
  //   const expIn = new Date().getTime() + +expiresIn * 1000;
  //   const data: any = {
  //     id,
  //     tokenId,
  //   };
  //   Object.keys(data).forEach((key) => {
  //     const value = data[key];
  //     this.shared.setCookieData(key, value.toString());
  //   });
  //   // setting the email and expiryDuration in localstorage for future purpose
  //   localStorage.setItem('email', JSON.stringify(email));
  //   localStorage.setItem('expiryDuration', JSON.stringify(expIn));
  //   this.loginToFeature(email, id, tokenId);
  // }

  /**
   * to login into the appropriate feature based on the email, returns void
   * @param email - email of the user
   * @param id - id of the user
   * @param tokenId - token id of the user
   */
  // loginToFeature(email: string, id: string, tokenId: string): void {
  //   if (email.includes('@student')) {
  //     this.crudMethods.getMethod(firebase_urls.studentInfo).subscribe((res) => {
  //       let stu_details = {};
  //       for (let key in res) {
  //         if (res[key].login_mail === email) {
  //           stu_details = res[key];
  //           break;
  //         }
  //       }
  //       localStorage.setItem('student_info', JSON.stringify(stu_details));
  //       this.router.navigate(['/student']);
  //     });
  //   } else {
  //     // to fetch from management.json
  //     this.shared.openSnackBar(
  //       'Other users will be enabled shortly',
  //       'Okay',
  //       2000
  //     );
  //     console.log('Management Login Starts');
  //   }
  // }
}
