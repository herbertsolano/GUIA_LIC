import { FormularioPage } from './app.po';

describe('formulario App', function() {
  let page: FormularioPage;

  beforeEach(() => {
    page = new FormularioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
