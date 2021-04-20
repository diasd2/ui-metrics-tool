import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {Metrics} from '../Metrics';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item?.currentValue !== changes.item?.previousValue) {
      this.buildDataModel();
      this.buildBarChart(this.item, this.chartData, this.chartLabels);
    }
  }

  /**
   * Build Data Model to be consumed
   */
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

  /**
   * Builds Bar Chart component
   *
   * @param catLabel - the category label
   * @param chartData - the chart values of y axis
   * @param chartLabels - the chart values of x axis
   */
  buildBarChart(catLabel: string, chartData: number[], chartLabels: string[]): void {
    this.barChartLabels = chartLabels;
    this.barChartData = [
      { data: chartData, label: 'Category: ' + catLabel }
    ];
  }
}
