import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Metrics } from './Metrics';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricsRestService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/Metrics/';

  getMetrics(): Observable<Metrics[]> {
    return this.http.get<Metrics[]>(this.url);
  }
}
