import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToCharts() {
    return browser.get('#/pages/charts');
  }

  getURL() {
  	return browser.getCurrentUrl();
  }

  getTable() {
    return element(by.css('table'));
  }

  getTableItems() {
    return element.all(by.css('table tbody tr'));
  }

  getSummaryText() {
  	return element(by.css('.card-footer')).getText();
  }

  getChartsMenu() {
  	return element(by.css('.menu-items .menu-item:nth-child(2)'));
  }
}
