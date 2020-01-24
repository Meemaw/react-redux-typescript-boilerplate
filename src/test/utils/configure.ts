import { createLocation, History } from 'history';
import createBrowserHistory from 'utils/history';
import configureStore, { PartialRootState } from 'utils/store';
import merge from 'lodash/merge';

export type BaseRenderOptions = {
  redux?: PartialRootState;
  pathname?: string;
};

export function createTestBrowserHistory(
  maybePathname: string | undefined
): History {
  const history = createBrowserHistory();
  if (maybePathname) {
    history.location = createLocation(maybePathname);
  }
  return history;
}

export function createTestInitialState(initialState: PartialRootState) {
  return merge({}, initialState);
}

export function createTestStore(initialState: PartialRootState) {
  const initialTestState = merge({}, initialState);
  return configureStore(initialTestState);
}
