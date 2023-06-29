import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.model';

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.component.html',
  styleUrls: ['./cost-chart.component.css'],
})
export class CostChartComponent {
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

    // Update the chart data with the cost values from the data
    this.barChartData = [
      {
        data: this.data.map((item) => item.cost),
        label: 'Cost',
        backgroundColor: '#ffe29a', // Set the background color of the bars
      },
    ];
  }
}
