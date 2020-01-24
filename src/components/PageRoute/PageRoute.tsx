import React, { Suspense } from 'react';
import { RouteProps, RouteComponentProps, Route } from 'react-router';
import Loading from 'components/Loading';

const PageRoute: React.FC<RouteProps> = ({
  component: Component,
  render,
  ...rest
}) => {
  const fallbackRenderFn = (props: RouteComponentProps) => {
    if (!Component) {
      // eslint-disable-next-line no-console
      console.error('[PageRoute]: component is expected!');
      return null;
    }

    return <SuspendedRouteComponent {...props} component={Component} />;
  };

  return <Route {...rest} render={render || fallbackRenderFn} />;
};

type SuspendedRouteComponentProps = RouteComponentProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const SuspendedRouteComponent = ({
  component: Component,
  ...props
}: SuspendedRouteComponentProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default PageRoute;
