import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      return { ...state, loggedIn: action.payload };
    },
  },
});

export default auth;
