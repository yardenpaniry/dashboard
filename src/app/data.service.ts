import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardData } from './dashboard-data.model';

interface ResponseData {
  title: string;
  data: DashboardData[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ResponseData> {
    return this.http.get<ResponseData>('assets/files/sample.json');
  }
}
