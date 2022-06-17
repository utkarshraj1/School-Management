import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudMethodsService } from 'src/app/shared/services/crud-methods.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';
import { SharedMethodsService } from 'src/app/shared/services/shared-methods.service';

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
}
