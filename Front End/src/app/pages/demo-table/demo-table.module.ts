import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReportService } from '../../@core/data/report.service';

import { DemoTableComponent } from './demo-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from '../../@theme/spinner/spinner.component';

import {DatePipe} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ],
  declarations: [DemoTableComponent, SpinnerComponent],
  providers: [ReportService]
})
export class DemoTableModule { }
