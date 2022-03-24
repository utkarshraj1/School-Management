import { Component, OnInit } from '@angular/core';
import { ICourseTable } from '../../models/courseTable.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  ELEMENT_DATA: ICourseTable[] = [
    { position: 1, course: 'Hydrogen', teacher: 'A' },
    { position: 2, course: 'Helium', teacher: 'B' },
    { position: 3, course: 'Lithium', teacher: 'C' },
    { position: 4, course: 'Beryllium', teacher: 'D' },
    { position: 5, course: 'Boron', teacher: 'E' },
  ];

  columns = [
    {
      columnDef: 'position',
      header: 'No.',
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
  dataSource = this.ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
