import { mount } from 'enzyme';
import * as React from 'react';

import TickerPage from '.';
import { assertAfterTimeout } from '../../test/utils';

describe('<TickerPage/>', () => {
  it('TickerPage_loadTickerData', done => {
    const wrapper = mount(<TickerPage />);
    assertAfterTimeout(() => {
      wrapper.update();
      expect(
        wrapper
          .find('div')
          .at(1)
          .text(),
      ).toContain('Bitcoin');
    }, done);
  });
});
