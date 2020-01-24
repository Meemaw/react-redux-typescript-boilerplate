import { createAction } from '@reduxjs/toolkit';
import { Coin } from 'modules/coinmarketcap';
import { useReducer, useCallback } from 'react';

const INITIAL_STATE = {
  loading: false,
  coins: [] as Coin[],
};

type State = typeof INITIAL_STATE;

const setLoadingAction = createAction<boolean>('setLoading');
const setCoinsAction = createAction<Coin[]>('setCoinds');

type StateAction =
  | ReturnType<typeof setLoadingAction>
  | ReturnType<typeof setCoinsAction>;

function stateReducer(state: State, action: StateAction): State {
  if (setLoadingAction.match(action)) {
    return { ...state, loading: action.payload };
  }
  if (setCoinsAction.match(action)) {
    return { ...state, loading: false, coins: action.payload };
  }

  return state;
}

const useTicker = () => {
  const [state, dispatch] = useReducer(stateReducer, INITIAL_STATE);

  const setLoading = useCallback(
    (loading: boolean) => {
      dispatch(setLoadingAction(loading));
    },
    [dispatch]
  );

  const setCoins = useCallback(
    (coins: Coin[]) => {
      dispatch(setCoinsAction(coins));
    },
    [dispatch]
  );

  return { ...state, setLoading, setCoins };
};

export default useTicker;
