import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.model';

//this component is for the num of clicks

@Component({
  selector: 'app-clicks-chart',
  templateUrl: './clicks-chart.component.html',
  styleUrls: ['./clicks-chart.component.css'],
})
export class ClicksChartComponent {
  @Input() data: DashboardData[] = [];

  //Definitions of the chart:
  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartLegend = true;
  barChartType = 'bar';
  barChartData: any[] = [];

  constructor() {}

  ngOnChanges() {
    this.barChartLabels = this.data.map((item) => item.timestamp);
    this.barChartData = [
      {
        data: this.data.map((item) => item.clicks),
        label: 'Clicks',
        backgroundColor: '#86c7f3',
      },
    ];
  }
}
