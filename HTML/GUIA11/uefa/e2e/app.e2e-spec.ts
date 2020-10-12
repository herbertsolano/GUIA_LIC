import { UefaPage } from './app.po';

describe('uefa App', function() {
  let page: UefaPage;

  beforeEach(() => {
    page = new UefaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
