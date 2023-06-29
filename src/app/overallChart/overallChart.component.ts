import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.model';

@Component({
  selector: 'app-overallChart',
  templateUrl: './overallChart.component.html',
  styleUrls: ['./overallChart.component.css'],
})
export class overallChartComponent {
  @Input() data: DashboardData[] = [];

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

    // Update the chart data with the respective values from the data
    this.barChartData = [
      {
        data: this.data.map((item) => item.impressions),
        label: 'Impressions',
      },
      { data: this.data.map((item) => item.clicks), label: 'Clicks' },
      { data: this.data.map((item) => item.cost), label: 'Cost' },
      {
        data: this.data.map((item) => item.conversions),
        label: 'Conversions',
      },
    ];
  }
}
