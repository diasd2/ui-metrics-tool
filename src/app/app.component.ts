import {Component, OnInit} from '@angular/core';
import { MetricsRestService } from './metrics-rest.service';
import { Metrics } from './Metrics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui-metrics-tool';

  constructor(private metricsRestService: MetricsRestService) { }

  columns = ['Id', 'Label', 'Value', 'Type', 'Description', 'Category'];

  metrics: Metrics[] = [];
  category: string = '';
  categories: any[] = [];

  ngOnInit(): void {
    this.metricsRestService.getMetrics().subscribe(response => {
      this.metrics = response;
      this.categories = this.getAvailableCategories(response);
    });
  }

  /**
   * Triggered when a row is clicked
   *
   * @param rowEl - the row element clicked
   */
  onRowElementClick(rowEl: Metrics): void {
    console.log('##Element clicked: ', rowEl);
  }

  /**
   * Get available categories from all records
   *
   * @param data - input data array
   */
  getAvailableCategories(data: Metrics[]): any[] {
    return data.reduce((acc: any[], metric: Metrics) => {
      if (!acc.includes(metric.category)) {
        acc.push(metric.category);
      }

      return acc;
    }, []);
  }
}
