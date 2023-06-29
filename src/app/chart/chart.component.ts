import { Component, Input } from '@angular/core';
import { DashboardData } from '../dashboard-data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @Input() data: DashboardData[] = [];
  @Input() label: string | undefined;
  @Input() color: string | undefined;

  // Definitions of the chart:
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
        data: this.data.map((item) => (this.label ? item[this.label] : null)),
        label: this.label,
        backgroundColor: this.color,
      },
    ];
  }
}
