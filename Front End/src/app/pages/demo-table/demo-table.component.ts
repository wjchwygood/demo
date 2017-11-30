import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../@core/data/report.service';

@Component({
  selector: 'demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {

  records: Array<any>;
  page: number = 0;
  size: number = 50;
  subTotal: number = 0;
  total: number = 0; 
  throttle: number = 300;
  scrollDistance: number = 1;
  isLoadingResults: boolean = false;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
  	this.appendRecords();
  }

  appendRecords() {
  	this.isLoadingResults = true;
    console.log('scrolled down!!');
    this.reportService.getDemo(this.page, this.size).subscribe(
    	data => {
    		this.records = this.records?(this.records.concat(data.content)):(data.content);
    		this.page++;
    		this.subTotal += data.numberOfElements;
    		this.total = data.totalElements
    		this.isLoadingResults = false;
    	},
    	(err: HttpErrorResponse) => {
    		if(err.error instanceof Error) {
    			console.error('An error occured:', err.error.message);
    		} else {
    			console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    		}
    	}
    );
  }
  
}
