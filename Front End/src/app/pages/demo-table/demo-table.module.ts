import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms'; 

import { ReportService } from '../../@core/data/report.service';

import { DemoTableComponent } from './demo-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../../@theme/spinner/spinner.component';

import {DatePipe} from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  declarations: [DemoTableComponent, SpinnerComponent, SearchBarComponent],
  providers: [ReportService]
})
export class DemoTableModule { }
