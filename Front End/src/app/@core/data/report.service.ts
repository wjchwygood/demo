import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Data } from './data';


@Injectable()
export class ReportService {
  
  constructor(private http: HttpClient) { }

  getDemo(page: number = 0, size: number = 15, customerID: string): Observable<Data> {
	  let url = `http://13.59.183.39:8080/demo/find?page=${page}&size=${size}`;
	  if(customerID) {
	  	url += `&customer_id=${customerID}`;
	  }
	  return this.http.get<Data>(url);
  }

}
