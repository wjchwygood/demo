import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ChartsModule } from './charts/charts.module'
import { DemoTableModule } from './demo-table/demo-table.module';

import { PagesRoutingModule } from './pages-routing.module';

import { NbThemeModule, NbSidebarModule, NbMenuModule, NbLayoutModule, NbSidebarService, NbMenuService } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    PagesRoutingModule,
    ChartsModule,
    DemoTableModule
  ],
  declarations: [PagesComponent],
  providers: [NbSidebarService]
})
export class PagesModule { }
