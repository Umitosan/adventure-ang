import { AdventureAngPage } from './app.po';

describe('adventure-ang App', () => {
  let page: AdventureAngPage;

  beforeEach(() => {
    page = new AdventureAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
