import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchEmitter = new EventEmitter<string>();
  @Input() placeholder: string;
  customerID: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
  	this.searchEmitter.emit(this.customerID);
  }

}
