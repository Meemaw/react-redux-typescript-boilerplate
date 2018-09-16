import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { logout } from '../actions/auth';
import api from '../lib/api';
import * as reducers from '../reducers';

export const history = createHistory();

const enhancers: any[] = [];

const middleware = [routerMiddleware(history), thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default function initStore(initialState: object = {}) {
  const rootReducer = combineReducers({
    ...reducers,
  });

  const store = createStore(connectRouter(history)(rootReducer), initialState, composedEnhancers);

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
