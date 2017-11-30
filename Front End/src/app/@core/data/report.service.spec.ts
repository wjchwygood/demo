import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ReportService } from './report.service';

describe('ReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ReportService]
    });
  });

  it('should be created', inject([ReportService], (service: ReportService) => {
    expect(service).toBeTruthy();
  }));

  it('should get 20 elements', inject([ReportService], (service: ReportService) => {
  	const page: number = 0;
  	const size: number = 20;
    service.getDemo(page, size, undefined).subscribe(data => {
    	expect(data.numberOfElements).toBe(size);
    })
  }));
});
