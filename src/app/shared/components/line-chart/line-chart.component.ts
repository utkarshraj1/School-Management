import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { chartColors } from '../../static/chart-colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  lineChartData: ChartConfiguration['data'];
  lineChartOptions: ChartConfiguration['options'];

  public lineChartType: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {
    const data = [69.2, 75.1, 82.8, 86.8, 91.2];
    const label = '%age';
    const xAxisLabels = ['6', '7', '8', '9', '10'];
  }
}
