import * as actionTypes from 'store/actionTypes';

import authReducer, { INITIAL_STATE } from './reducer';

describe('Auth reducer', () => {
  it('authReducer_returnsInitialState_onLogout', () => {
    const state = authReducer(undefined, { type: actionTypes.LOGOUT });
    expect(state).toEqual(INITIAL_STATE);
  });
});
