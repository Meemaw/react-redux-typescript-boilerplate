import rootReducer from 'reducers';
import {
  configureStore as configureToolkitStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  DeepPartial,
} from '@reduxjs/toolkit';
import { PickValueOf } from 'types/utils';

export type RootState = ReturnType<typeof rootReducer>;
export type PartialRootState = DeepPartial<RootState>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default function configureStore(initialState: PartialRootState = {}) {
  return configureToolkitStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  });
}

export type RootDispatch = PickValueOf<
  ReturnType<typeof configureStore>,
  'dispatch'
>;
