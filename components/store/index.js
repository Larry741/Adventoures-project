import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: modalSlice.reducer
})

export default store;