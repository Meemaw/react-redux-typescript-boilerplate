import * as React from 'react';
import * as GoogleAnalytics from 'react-ga';
import { RouteComponentProps } from 'react-router';

import { HOC } from '../../meta/types/Hoc';

GoogleAnalytics.initialize('trackingId');

export interface RouteProps extends RouteComponentProps<any> {}

const trackPage = (page: any, options: any) => {
  GoogleAnalytics.set({
    page,
    ...options,
  });
  GoogleAnalytics.pageview(page);
};

const withTracker = <P, S>(WrappedComponent: HOC<P, object>, options = { debug: true }) => {
  return class extends React.Component<RouteProps & P, S> {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page, options);
    }

    componentWillReceiveProps(nextProps: RouteProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage, options);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withTracker;
