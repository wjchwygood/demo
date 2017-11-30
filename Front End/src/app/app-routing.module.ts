import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesComponent } from "./pages/pages.component";
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 	{ path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
 	{ path: '', redirectTo: 'pages', pathMatch: 'full'},
 	{ path: '**', redirectTo: 'pages' }
 ];

const config: ExtraOptions = {
	useHash: true
};


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
