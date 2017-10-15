import { AngularHome3Page } from './app.po';

describe('angular-home3 App', () => {
  let page: AngularHome3Page;

  beforeEach(() => {
    page = new AngularHome3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
