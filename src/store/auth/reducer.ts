import * as actionTypes from 'store/actionTypes';
import { Reducer } from 'redux';

import { AuthAction } from './actions';

export type AuthState = {};

export const INITIAL_STATE: AuthState = {};

const auth: Reducer<AuthState, AuthAction> = (
  state: AuthState = INITIAL_STATE,
  action: AuthAction,
) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return state;
    default:
      return state;
  }
};

export default auth;
