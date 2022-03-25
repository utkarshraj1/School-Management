import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-results',
  templateUrl: './exam-results.component.html',
  styleUrls: ['./exam-results.component.scss']
})
export class ExamResultsComponent implements OnInit {

  dataColumns: { columnDef: string; header: string; cell: (element: any) => string; }[];
  rowData: any;

  constructor() { }

  ngOnInit(): void {
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
        columnDef: 'marks',
        header: 'Marks Obtained',
        cell: (element: any) => `${element['marks']}`,
      },
      {
        columnDef: 'totalmarks',
        header: 'Total Marks',
        cell: (element: any) => `${element['totalmarks']}`
      }
    ];
    this.rowData = this.rowData = [
      { position: 1, course: 'Sanskrit', marks: 94, totalmarks: 100 },
      { position: 2, course: 'English', marks: 82, totalmarks: 100 },
      { position: 3, course: 'Hindi', marks: 79, totalmarks: 100 },
      { position: 4, course: 'Science', marks: 98, totalmarks: 100 },
      { position: 5, course: 'Social Science', marks: 92, totalmarks: 100 },
    ];
  }

}
