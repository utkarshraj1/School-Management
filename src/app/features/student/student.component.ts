import { Component, OnInit } from '@angular/core';
import { ISideNavRouteDetails } from 'src/app/shared/models/sideNavRouteDetails.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  loading: boolean;
  sideNavRouteDetails: Array<ISideNavRouteDetails>;

  constructor() {}

  ngOnInit(): void {
    console.log(localStorage.getItem('refreshToken'));
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    this.sideNavRouteDetails = [
      { name: 'Dashboard', icon: 'dashboard', routerVal: '/student/' },
      { name: 'Courses', icon: 'auto_stories', routerVal: '/student/courses' },
      {
        name: 'Exam Results',
        icon: 'fact_check',
        routerVal: '/student/exam-results',
      },
      { name: 'Personal Info', icon: 'portrait', routerVal: '/student/info' },
    ];
  }
}
