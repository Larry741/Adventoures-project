import { createSlice } from "@reduxjs/toolkit";

const initialState = { showModal: false, showCalendar: false }

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal(state) {
      state.showModal = false;
    },
    showModal(state) {
      state.showModal = true;
    },
    closeCalendar(state, action) {
      state.showCalendar = false;
    },
    showCalendar(state) {
      state.showCalendar = true;
    },
  },
});

export const modalSliceActions = modalSlice.actions;

export default modalSlice;