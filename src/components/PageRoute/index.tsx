import React, { Suspense } from 'react';
import { RouteProps, RouteComponentProps, Route } from 'react-router';
import Loading from 'components/Loading';

type Props = RouteProps;

const PageRoute: React.FC<Props> = ({ component: Component, render, ...rest }) => {
  const fallbackRenderFn = (props: RouteComponentProps) => {
    if (!Component) {
      console.error('[PageRoute]: component is expected!');
      return null;
    }

    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return <Route {...rest} render={render || fallbackRenderFn} />;
};

export default PageRoute;
