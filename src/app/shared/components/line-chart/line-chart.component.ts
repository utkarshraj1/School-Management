import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { chartColors } from '../../static/chart-colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartConfiguration['data'];
  lineChartOptions: ChartConfiguration['options'];

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
    const data = [69.2, 75.1, 82.8, 86.8, 91.2];
    const label = '%age';
    const xAxisLabels = ['6', '7', '8', '9', '10'];

    this.lineChartData = {
      datasets: [
        {
          data: data,
          label: label,
          backgroundColor: 'transparent',
          borderColor: chartColors['line-chart'].line,
          pointBackgroundColor: chartColors['line-chart'].point.main,
          pointHoverBackgroundColor: chartColors['line-chart'].point.hover,
          pointBorderColor: '#fff',
          pointHoverBorderColor: '#fff',
          fill: 'true'
        }
      ],
      labels: xAxisLabels
    };
    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        x: {},
        'y-axis-0': {
          position: 'left',
        },
      },
      plugins: {
        legend: { display: true },
      },
      aspectRatio: 3,
      maintainAspectRatio: true
    };
  }

}
