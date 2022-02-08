import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer, auth: authSlice.reducer },
});

export default store;