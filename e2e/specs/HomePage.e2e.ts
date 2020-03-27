import { Selector } from 'testcafe';

import HomePage from '../__pages__/HomePage';

const baseUrl = 'http://localhost:3000/';

const homePage = new HomePage();

fixture('<Home />').page(baseUrl);

test('Matches correct Home header', async (t) => {
  const header = await Selector(homePage.headerSelector);
  await t.expect(header.innerText).eql('React Redux Typescript Boilerplate');
});
