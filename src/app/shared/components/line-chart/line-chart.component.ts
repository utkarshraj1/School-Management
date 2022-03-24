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
    this.lineChartData = {
      datasets: [
        {
          data: [69.2, 75.1, 82.8, 86.8, 91.2],
          label: '%age',
          backgroundColor: 'transparent',
          borderColor: chartColors.success.hover,
          pointBackgroundColor: chartColors.error.main,
          pointHoverBackgroundColor: chartColors.error.hover,
          pointBorderColor: '#fff',
          pointHoverBorderColor: '#fff',
          fill: 'true'
        }
      ],
      labels: ['6', '7', '8', '9', '10']
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
      aspectRatio: 2.5,
      maintainAspectRatio: true
    };
  }

}
