import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  phoneUser: false,
};
const phoneUserSlice = createSlice({
  name: "phoneUser",
  initialState: initialUserState,
  reducers: {
    setPhoneUser(state, action) {
      state.phoneUser = action.payload;
    },
  },
});
export const phoneUserActions = phoneUserSlice.actions;
export default phoneUserSlice;
