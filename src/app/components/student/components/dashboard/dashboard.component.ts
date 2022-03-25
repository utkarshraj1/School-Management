import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataColumn: any;
  rowData: any;

  constructor() { }

  ngOnInit(): void {
    this.dataColumn = [
      {
        columnDef: 'position',
        header: 'Position',
        cell: (element: any) => `${element['position']}`,
      },
      {
        columnDef: 'course',
        header: 'Course',
        cell: (element: any) => `${element['course']}`,
      },
      {
        columnDef: 'teacher',
        header: 'Teacher',
        cell: (element: any) => `${element['teacher']}`,
      }
    ];
    this.rowData = [
      { position: 1, course: 'Sanskrit', teacher: 'S Tiwary', attendance: '18/19' },
      { position: 2, course: 'English', teacher: 'SB Raman', attendance: '15/20' },
      { position: 3, course: 'Hindi', teacher: 'Suman Mehrotra', attendance: '24/26' },
      { position: 4, course: 'Science', teacher: 'Mithilesh Sinha', attendance: '23/34' },
      { position: 5, course: 'Social Science', teacher: 'Amresh Kumar', attendance: '22/24' },
    ];
  }

}
