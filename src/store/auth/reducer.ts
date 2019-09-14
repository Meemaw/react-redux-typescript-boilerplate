import * as actionTypes from 'store/actionTypes';

import { AuthAction } from './actions';
import { Reducer } from 'redux';

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
