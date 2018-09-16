import { logout } from '.';
import * as actionTypes from '../../constants/actionTypes';

describe('auth', () => {
  describe('ILogout', () => {
    it('Returns correct action type', () => {
      expect(logout()).toEqual({ type: actionTypes.LOGOUT });
    });
  });
});
