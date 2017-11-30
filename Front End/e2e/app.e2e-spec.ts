import { AppPage } from './app.po';

describe('report App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should redirect to table page', () => {
    expect(page.getURL()).toContain('#/pages/table');
  });

  it('should display a table', () => {
    expect(page.getTable()).toBeTruthy();
  });

  it('should have 50 tuples ', () => {
  	page.getTableItems().then(
  		data => {
  			expect(data.length).toBe(50);
  		}
  	)
  });

  it('should dispaly a summary like \'50 of 3999\'', () => {
    expect(page.getSummaryText()).toBe('50 of 3999');
  });

  it('should redirect to charts page', () => {
  	page.getChartsMenu().click();
    expect(page.getURL()).toContain('#/pages/charts');
  });
});
