import { GamesOfThronesPage } from './app.po';

describe('games-of-thrones App', () => {
  let page: GamesOfThronesPage;

  beforeEach(() => {
    page = new GamesOfThronesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
