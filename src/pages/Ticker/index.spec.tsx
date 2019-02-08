import { mount } from 'enzyme';
import React from 'react';

import TickerPage from '.';
import { assertAfterTimeout } from '../../test/unit/__helpers__';

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
