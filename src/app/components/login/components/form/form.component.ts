import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';
import { ILoginDetails } from '../../models/loginDetails';
import { mat_icons } from 'src/app/shared/static/material-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  buttonLoadingShow: boolean;
  loginForm: FormGroup;
  // Thinking of emitting the login credentials
  // @Output() loginCredentials: EventEmitter<ILoginDetails> = new EventEmitter<ILoginDetails>();
  materialIcons: any;

  constructor(private shared: SharedMethodsService) { }

  ngOnInit(): void {
    this.buttonLoadingShow = false;
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null,
        [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
    });
    this.materialIcons = {
      ...mat_icons
    };
  }

  /**
   * To submit the login credentials, returns void.
   * @param form - FormGroup
   */
  loginClickHandler(form: any): void {
    if (!form.valid) {
      this.shared.openSnackBar('All fields are mandatory.', 'Close', 2000);
    }
    else {
      // Authentication Logic will be written here.
      this.buttonLoadingShow = true;
      setTimeout(() => {
        this.buttonLoadingShow = false;
      }, 4000);
    }
  }

}
