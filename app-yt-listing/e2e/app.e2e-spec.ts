import { AppYtListingPage } from './app.po';

describe('app-yt-listing App', function() {
  let page: AppYtListingPage;

  beforeEach(() => {
    page = new AppYtListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
