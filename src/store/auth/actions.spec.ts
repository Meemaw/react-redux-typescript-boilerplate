import * as actionTypes from 'store/actionTypes';

import { logout } from './actions';

describe('auth', () => {
  it('ILogout returns correct action type', () => {
    expect(logout()).toEqual({ type: actionTypes.LOGOUT });
  });
});
