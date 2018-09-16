import { ILogout } from '../../actions/auth';
import * as actionTypes from '../../constants/actionTypes';
import { AuthState } from '../../meta/types/Store';

export const INITIAL_STATE: AuthState = {};

const auth = (state: AuthState = INITIAL_STATE, action: ILogout) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return state;
    default:
      return state;
  }
};

export default auth;
