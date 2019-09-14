import * as actionTypes from '../actionTypes';

export interface ILogout {
  type: actionTypes.LOGOUT;
}

export const logout = (): ILogout => ({
  type: actionTypes.LOGOUT,
});

export type AuthAction = ILogout;
