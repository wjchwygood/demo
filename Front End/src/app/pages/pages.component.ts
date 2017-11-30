import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './page-menu';

import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  
  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
    setTimeout(()=>{this.sidebarService.toggle(true, 'menu-sidebar');}, 0);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

}
