import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  host: {'class': 'my-spinner'}
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
