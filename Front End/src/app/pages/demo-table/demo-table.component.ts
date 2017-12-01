import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ReportService } from '../../@core/data/report.service';

@Component({
  selector: 'demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  @Input() size: number;
  @ViewChild('table') table: ElementRef;

  records: Array<any>;
  page: number = 0;
  subTotal: number = 0;
  total: number = 0; 
  throttle: number = 300;
  scrollDistance: number = 1;
  isLoadingResults: boolean = false;
  customerID: string;
  searchBarPlaceholder: string = "Type Customer ID...";

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh(customerID: string = undefined) {
    this.customerID = customerID;
    this.appendRecords(true);
  }

  appendRecords(needRefresh: boolean = false) {
    if ( !needRefresh && (this.subTotal === this.total)) {
      return;
    }
    this.isLoadingResults = true;
    this.size = this.size || 50;
    if (needRefresh) {
      this.page = 0;
      this.subTotal = 0;
      this.table.nativeElement.scrollTop = 0;
    }
    this.reportService.getDemo(this.page, this.size, this.customerID).subscribe(
      data => {
        if(!this.records || needRefresh){
           this.records = data.content;
        }else {
           this.records = this.records.concat(data.content);
        }
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
