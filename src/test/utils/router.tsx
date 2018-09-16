import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { HOC } from '../../meta/types/Hoc';

const withRouter = <P, S>(WrappedComponent: HOC<P, S>, Router = MemoryRouter) => {
  return <Router>{WrappedComponent}</Router>;
};

export default withRouter;
