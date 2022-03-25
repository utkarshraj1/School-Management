import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() dataColumns: any;
  @Input('data') rowData: any;

  columns: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.rowData);
    this.columns = this.dataColumns;
    this.displayedColumns = this.columns.map((c: any) => c.columnDef);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
