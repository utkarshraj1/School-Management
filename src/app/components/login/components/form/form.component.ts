import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';
import { ILoginCredentials } from '../../models/loginCredentials';
import { mat_icons } from 'src/app/shared/static/material-icons';
import { CrudMethodsService } from 'src/app/shared/services/crud-methods.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  buttonLoadingShow: boolean;
  loginForm: FormGroup;
  materialIcons: any;

  @Output() loginCredentials: EventEmitter<ILoginCredentials> =
    new EventEmitter<ILoginCredentials>();

  constructor(
    private shared: SharedMethodsService,
    private crudMethods: CrudMethodsService,
  ) {}

  ngOnInit(): void {
    this.buttonLoadingShow = false;
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
      ]),
    });
    this.materialIcons = {
      ...mat_icons,
    };
  }

  /**
   * To submit the login credentials, returns void.
   * @param form - FormGroup
   */
  loginClickHandler(form: any): void {
    if (!form.valid) {
      this.shared.openSnackBar(this.formValidity(form), 'Close', 2000);
    } else {
      this.buttonLoadingShow = true;
      // Sign in
    }
  }

  /**
   * checks the form validity and gives custom message to the snackbar, returns a string
   * @param form - FormGroup
   * @returns string
   */
  formValidity(form: any): string {
    const emailIsInvalid = !form.controls.email.valid;
    const passwordIsInvalid = !form.controls.password.valid;
    let returnMsg = '';
    if (emailIsInvalid && passwordIsInvalid) {
      returnMsg = 'All fields are mandatory.';
    } else if (emailIsInvalid && !passwordIsInvalid) {
      returnMsg = 'Please check the hint for email.';
    } else if (!emailIsInvalid && passwordIsInvalid) {
      returnMsg = 'Please check the hint for password.';
    }
    return returnMsg;
  }

  /**
   * gets the error from auth server and opens snackbar with custom error message, returns void
   * @param errorMsg - error message from authentication server
   */
  errorMessageShow(errorMsg: string): void {
    let snackBarMsg = '';
    switch (errorMsg) {
      case 'EMAIL_NOT_FOUND':
        snackBarMsg = `Email doesn't exists.`;
        break;
      case 'INVALID_PASSWORD':
        snackBarMsg = `Password is invalid.`;
        break;
      default:
        snackBarMsg = 'Something is not right, please check your credentials.';
        break;
    }
    this.shared.openSnackBar(snackBarMsg, 'Close', 2000);
  }
}
