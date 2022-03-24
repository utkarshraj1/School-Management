import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { chartColors } from '../../static/chart-colors';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: ChartData<'doughnut'>;

  constructor() { }

  ngOnInit(): void {

    // All the data will be pulled out from the backend
    const { success, error } = chartColors;
    const labels = ['Present', 'Absent']
    const data = [93, 7];

    this.doughnutChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: [success.main, error.main],
          hoverBackgroundColor: [success.hover, error.hover],
          hoverBorderColor: [success.hover, error.hover],
        }
      ]
    };
  }

}
