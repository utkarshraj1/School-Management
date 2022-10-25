import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';
import { ILoginCredentials } from '../../models/loginCredentials';
import { mat_icons } from 'src/app/shared/static/material-icons';
import { API_URLS } from 'src/app/shared/static/important-urls';
import { environment } from 'src/environments/environment';
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
      this.crudMethods
        .postMethod(`${environment.restApi}${API_URLS.login}`, {
          username: form.value.email,
          password: form.value.password,
        })
        .subscribe(
          (res: any) => {
            this.loginCredentials.emit(res);
            this.buttonLoadingShow = false;
          },
          (err) => {
            this.shared.openSnackBar(err.error.message, 'Close', 2000);
            this.buttonLoadingShow = false;
          },
        );
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
}
