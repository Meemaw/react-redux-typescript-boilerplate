import configureStore from 'store';
import auth from './auth';

describe('auth', () => {
  it('should update the loggeIn state', () => {
    const store = configureStore();
    expect(store.getState().auth.loggedIn).toEqual(false);
    store.dispatch(auth.actions.setLoggedIn(true));
    expect(store.getState().auth.loggedIn).toEqual(true);
  });
});
