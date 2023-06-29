import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { overallChartComponent } from './overallChart/overallChart.component';
import { impressionsChartComponent } from './impressions-chart/impressions-chart.component';
import { ClicksChartComponent } from './clicks-chart/clicks-chart.component';
import { CostChartComponent } from './cost-chart/cost-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    overallChartComponent,
    impressionsChartComponent,
    ClicksChartComponent,
    CostChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
