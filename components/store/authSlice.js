import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn: false, idToken: ''}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.idToken = action.payload;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.idToken = '';
    }
  }
})
;
export const authSliceActions = authSlice.actions;

export default authSlice;