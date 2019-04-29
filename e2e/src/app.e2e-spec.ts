import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display: CoreUI © 2019 creativeLabs.', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CoreUI © 2019 creativeLabs.');
  });
});
