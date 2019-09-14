import React, { Suspense } from 'react';
import { RouteProps, RouteComponentProps, Route } from 'react-router';
import Loading from 'components/Loading';
import useTrackPageview from 'hooks/useTrackPageview';

type Props = RouteComponentProps & {
  component: React.ComponentType<RouteComponentProps>;
};

const SuspendedRouteComponent = ({ component: Component, ...props }: Props) => {
  useTrackPageview(props.location.pathname);

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const PageRoute: React.FC<RouteProps> = ({ component: Component, render, ...rest }) => {
  const fallbackRenderFn = (props: RouteComponentProps) => {
    if (!Component) {
      console.error('[PageRoute]: component is expected!');
      return null;
    }

    return <SuspendedRouteComponent {...props} component={Component} />;
  };

  return <Route {...rest} render={render || fallbackRenderFn} />;
};

export default PageRoute;
