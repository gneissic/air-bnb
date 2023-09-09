import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  gitUser: false,
};
const gitUserSlice = createSlice({
  name: "gitUser",
  initialState: initialUserState,
  reducers: {
    setGitleUser(state, action) {
      state.googleUser = action.payload;
    },
  },
});
export const gitUserActions = gitUserSlice.actions;
export default gitUserSlice;
