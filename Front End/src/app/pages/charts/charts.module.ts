import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';

import { NbThemeModule, NbSidebarModule, NbMenuModule, NbLayoutModule, NbSidebarService, NbMenuService } from '@nebular/theme';

import { ChartsComponent } from './charts.component';




@NgModule({
  imports: [
    ChartModule,
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule {  }
