import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Metrics} from '../Metrics';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() item: string = '';
  @Input() data: Metrics[] = [];

  catLabel: string = '';
  chartData: number[] = [];
  chartLabels: string[] = [];
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item?.currentValue !== changes.item?.previousValue) {
      this.buildDataModel();
      this.buildBarChart(this.item, this.chartData, this.chartLabels);
    }
  }

  buildDataModel(): void {
    const filteredData: Metrics[] = this.data.filter(item => item.category === this.item);

    this.chartLabels = filteredData.reduce((acc: string[], met: Metrics) => {
      acc.push(met.description);
      return acc;
    }, []);

    this.chartData = filteredData.reduce((acc: number[], met: Metrics) => {
      acc.push(met.value);
      return acc;
    }, []);
  }

  buildBarChart(catLabel: string, chartData: number[], chartLabels: string[]): void {
    this.barChartLabels = chartLabels;
    this.barChartData = [
      { data: chartData, label: 'Category: ' + catLabel }
    ];
  }
}
