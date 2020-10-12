import { AlumnosPage } from './app.po';

describe('alumnos App', function() {
  let page: AlumnosPage;

  beforeEach(() => {
    page = new AlumnosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
