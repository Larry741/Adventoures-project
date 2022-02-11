import { createSlice } from "@reduxjs/toolkit";

const initialState = {isAuthenticated: false, redirectKey: '', user: {name: '', idToken: ''}}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isAuthenticated = true;
      state.user.idToken = action.payload;
      localStorage.setItem("idToken", action.payload);
    },
    logOut(state, action) {
      state.isAuthenticated = false;
      state.user.idToken = "";
      localStorage.removeItem("idToken");
    },
    // setRedirect(redirect) {
    //   sessionStorage.setItem(redirectKey, redirect);
    // },
    // getRedirect() {
    // return sessionStorage.getItem(redirectKey)
    // },
    // clearRedirect() {
    // return sessionStorage.removeItem(redirectKey)
    // }
  },
});
;
export const authSliceActions = authSlice.actions;

export default authSlice;