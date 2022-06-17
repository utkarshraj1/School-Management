import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { CrudMethodsService } from './shared/services/crud-methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // loginForm: FormGroup;

  // private crudMethods: CrudMethodsService
  constructor() {}

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   name: new FormControl(),
    //   class: new FormControl(),
    //   section: new FormControl(),
    //   roll_no: new FormControl(),
    //   login_mail: new FormControl()
    // });
  }

  // submitDataHandler(loginForm: any): void {
  //   const data = {
  //     ...loginForm.value
  //   };
  //   console.log(data);
  //   this.crudMethods.postMethod('https://school-zilla-default-rtdb.firebaseio.com/student_info.json', data).subscribe(res => {
  //     console.log(res);
  //   });
  // }
}
