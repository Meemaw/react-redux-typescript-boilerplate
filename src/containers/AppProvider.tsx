import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import configureStore from 'store';
import { RootState } from 'store/types';
import history from 'lib/history';

type Props = {
  children: React.ReactNode;
  initialState?: Partial<RootState>;
};

const AppProvider = ({ children, initialState = {} }: Props) => {
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default AppProvider;
