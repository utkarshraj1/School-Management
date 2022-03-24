import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ICourseTable } from '../../models/courseTable.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ELEMENT_DATA: ICourseTable[] = [
    { position: 1, course: 'Sanskrit', teacher: 'S Tiwary' },
    { position: 2, course: 'English', teacher: 'SB Raman' },
    { position: 3, course: 'Hindi', teacher: 'SUman Mehrotra' },
    { position: 4, course: 'Science', teacher: 'Mithilesh Sinha' },
    { position: 5, course: 'Social Science', teacher: 'Amresh Kumar' },
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
  dataSource = new MatTableDataSource<ICourseTable>(this.ELEMENT_DATA);
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
