import api from 'utils/api';
import { applyMiddleware, compose, createStore, StoreEnhancer, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { logout } from 'store/auth';
import rootReducer, { RootReducer } from 'store/rootReducer';
import { RootAction, RootState } from 'store/types';

const enhancers: StoreEnhancer[] = [];

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(devToolsEnhancer({}));
}

const middleware = [thunk as ThunkMiddleware<RootState, RootAction>];

const composedEnhancers: StoreEnhancer = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default function initStore(
  initialState: Partial<RootState> = {},
): Store<RootState, RootAction> {
  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nextRootReducer: RootReducer = require('./rootReducer');
        store.replaceReducer(nextRootReducer);
      });
    }
  }

  api.on('401', _ => {
    store.dispatch(logout());
  });

  return store;
}
