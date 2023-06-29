import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DashboardData } from '../dashboard-data.model';

interface ResponseData {
  title: string;
  data: DashboardData[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  response: ResponseData = { title: '', data: [] };
  data: DashboardData[] = [];

  constructor(private dataService: DataService) {}

  // Method to fetch data from the data service
  fetchData(): void {
    this.dataService.getData().subscribe((response) => {
      console.log('response', response);
      this.response = response;

      this.data = this.response.data;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
