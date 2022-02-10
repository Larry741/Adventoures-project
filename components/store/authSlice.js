import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn: false}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      localStorage.setItem("idToken", action.payload);
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      localStorage.removeItem("idToken");
    }
  }
})
;
export const authSliceActions = authSlice.actions;

export default authSlice;