import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('student_info') || ''));
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    // }, 3000);
  }

}
