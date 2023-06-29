import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.model';

//this component is for the num of impressions

@Component({
  selector: 'app-impressions-chart',
  templateUrl: './impressions-chart.component.html',
  styleUrls: ['./impressions-chart.component.css'],
})
export class impressionsChartComponent {
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
    // Update the chart labels to reflect the timestamps from the data
    this.barChartLabels = this.data.map((item) => item.timestamp);

    // Update the chart data with the Impressions values from the data
    this.barChartData = [
      {
        data: this.data.map((item) => item.impressions),
        label: 'Impressions',
      },
    ];
  }
}
