import { Action } from 'redux';

import { LOGOUT } from '../actionTypes';

export type LogoutAction = Action<LOGOUT>;

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export type AuthAction = LogoutAction;
