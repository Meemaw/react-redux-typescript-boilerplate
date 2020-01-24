import { useSelector } from 'react-redux';
import { RootState } from 'utils/store';

export default <TSelected, T = RootState>(
  selector: (state: T) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => {
  return useSelector<T, TSelected>(selector, equalityFn);
};
