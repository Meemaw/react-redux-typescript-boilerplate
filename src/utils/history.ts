import { createBrowserHistory as createNewBrowserHistory } from 'history';

export const createBrowserHistory = () => {
  const history = createNewBrowserHistory();

  return history;
};

export default createBrowserHistory;
