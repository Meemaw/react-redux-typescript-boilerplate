import authReducer, { INITIAL_STATE } from '.';
import * as actionTypes from '../../constants/actionTypes';

describe('Auth reducer', () => {
  it('authReducer_returnsInitialState_onLogout', () => {
    const state = authReducer(undefined, { type: actionTypes.LOGOUT });
    expect(state).toEqual(INITIAL_STATE);
  });
});
