import { TestBed } from '@angular/core/testing';

import { MetricsRestService } from './metrics-rest.service';

describe('MetricsRestService', () => {
  let service: MetricsRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetricsRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
