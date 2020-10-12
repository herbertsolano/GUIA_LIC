import { ConversorPage } from './app.po';

describe('conversor App', function() {
  let page: ConversorPage;

  beforeEach(() => {
    page = new ConversorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
