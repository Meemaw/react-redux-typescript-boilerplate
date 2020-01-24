import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { History } from 'history';
import configureStore from 'utils/store';

type Props = {
  children: React.ReactNode;
  history: History;
  store: ReturnType<typeof configureStore>;
};

const AppProvider = ({ children, history, store }: Props) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default AppProvider;
