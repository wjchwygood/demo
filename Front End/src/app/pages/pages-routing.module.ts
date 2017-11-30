import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {PagesComponent} from './pages.component';
import {ChartsComponent} from './charts/charts.component';
import {DemoTableComponent} from './demo-table/demo-table.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'charts',
    component: ChartsComponent,
  }, 
  {
    path: 'table',
    component: DemoTableComponent,
  }, 
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PagesRoutingModule { }
