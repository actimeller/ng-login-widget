import { NgLoginWidgetPage } from './app.po';

describe('ng-login-widget App', function() {
  let page: NgLoginWidgetPage;

  beforeEach(() => {
    page = new NgLoginWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
