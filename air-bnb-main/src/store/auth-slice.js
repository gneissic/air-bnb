import { createSlice } from "@reduxjs/toolkit";
const initialModalState = {
  showModal: false,
};
const authSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    onShowModal(state) {
      state.showModal = true;
    },
    onHideModal(state) {
      state.showModal = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
