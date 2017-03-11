import { FrontendDeveloperPortfolioBuilderPage } from './app.po';

describe('frontend-developer-portfolio-builder App', () => {
  let page: FrontendDeveloperPortfolioBuilderPage;

  beforeEach(() => {
    page = new FrontendDeveloperPortfolioBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
