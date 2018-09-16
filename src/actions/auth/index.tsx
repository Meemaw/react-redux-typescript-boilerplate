import * as actionTypes from '../../constants/actionTypes';

export interface ILogout {
  type: actionTypes.LOGOUT;
}

export const logout = (): ILogout => ({
  type: actionTypes.LOGOUT,
});
