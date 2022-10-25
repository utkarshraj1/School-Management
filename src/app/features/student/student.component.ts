import { Component, OnInit } from '@angular/core';
import { ISideNavRouteDetails } from 'src/app/shared/models/sidenav-route-details.model';
import { MatIcons } from 'src/app/shared/static/material-icons';

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
      { name: 'Dashboard', icon: MatIcons.DASHBOARD, routerVal: '/student/' },
      {
        name: 'Courses',
        icon: MatIcons.COURSES,
        routerVal: '/student/courses',
      },
      {
        name: 'Exam Results',
        icon: MatIcons.RESULTS,
        routerVal: '/student/exam-results',
      },
      {
        name: 'Personal Info',
        icon: MatIcons.PERSONAL,
        routerVal: '/student/info',
      },
    ];
  }
}
