import * as L from 'react-loadable';

import Loading from '../Loading';

type Props = {
  loader: any;
  delay?: number;
  timeout?: number;
};

function Loadable(opts: Props) {
  return L({
    delay: 200,
    timeout: 10,
    loading: Loading,
    ...opts,
  });
}

export default Loadable;
