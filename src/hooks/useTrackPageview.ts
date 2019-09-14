import { set, pageview, FieldsObject } from 'react-ga';
import { useEffect } from 'react';

const DEFAULT_OPTIONS = {};

function useTrackPageview(page: string, options: FieldsObject = DEFAULT_OPTIONS) {
  useEffect(() => {
    set({ ...options, page });
    pageview(page);
  }, [page, options]);
}

export default useTrackPageview;
