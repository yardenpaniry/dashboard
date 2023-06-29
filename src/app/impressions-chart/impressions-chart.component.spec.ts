import { ComponentFixture, TestBed } from '@angular/core/testing';

import { impressionsChartComponent } from './impressions-chart.component';

describe('ImpressionsChartComponent', () => {
  let component: impressionsChartComponent;
  let fixture: ComponentFixture<impressionsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [impressionsChartComponent],
    });
    fixture = TestBed.createComponent(impressionsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
