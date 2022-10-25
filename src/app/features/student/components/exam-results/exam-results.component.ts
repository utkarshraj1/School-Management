import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.scss'],
})
export class ExamResultsComponent implements OnInit {
  dataColumns: {
    columnDef: string;
    header: string;
    cell: (element: any) => string;
  }[];
  rowData: any;
  abbShow: boolean;

  selectedClass: string;
  classDropdownValues: string[];

  constructor() {}

  ngOnInit(): void {
    this.abbShow = false;
    this.dataColumns = [
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
        columnDef: 'totalmarks',
        header: 'Total Marks',
        cell: (element: any) => `${element['totalmarks']}`,
      },
      {
        columnDef: 'marks',
        header: 'Marks Obtained',
        cell: (element: any) => `${element['marks']}`,
      },
      {
        columnDef: 'pub_date',
        header: 'Published Date',
        cell: (element: any) => `${element['pub_date']}`,
      },
    ];
    this.rowData = this.rowData = [
      {
        position: 1,
        course: 'Sanskrit',
        marks: 94,
        totalmarks: 100,
        pub_date: '17/03/2022',
      },
      {
        position: 2,
        course: 'English',
        marks: 82,
        totalmarks: 100,
        pub_date: '17/03/2022',
      },
      {
        position: 3,
        course: 'Hindi',
        marks: 79,
        totalmarks: 100,
        pub_date: '17/03/2022',
      },
      {
        position: 4,
        course: 'Science',
        marks: 98,
        totalmarks: 100,
        pub_date: '17/03/2022',
      },
      {
        position: 5,
        course: 'Social Science',
        marks: 92,
        totalmarks: 100,
        pub_date: '17/03/2022',
      },
    ];

    this.classDropdownValues = ['12', '11', '10'];
    this.selectedClass = this.classDropdownValues[0];
  }
}
