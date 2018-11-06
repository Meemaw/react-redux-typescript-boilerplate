import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { logout } from '../actions/auth';
import api from '../lib/api';
import * as reducers from '../reducers';

const enhancers: any[] = [];

const middleware = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default function initStore(initialState: object = {}) {
  const rootReducer = combineReducers({
    ...reducers,
  });

  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  api.on('401', _ => {
    store.dispatch(logout());
  });

  return store;
}
