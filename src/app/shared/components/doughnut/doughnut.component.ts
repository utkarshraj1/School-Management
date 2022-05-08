import { Component, OnInit } from '@angular/core';
import { chartColors } from '../../static/chart-colors';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // All the data will be pulled out from the backend
    const { success, error } = chartColors;
    const labels = ['Present', 'Absent'];
    const data = [93, 7];
  }
}
