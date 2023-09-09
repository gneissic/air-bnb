import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  googleUser: false,
};
const googleUserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setGoogleUser(state, action) {
      state.googleUser = action.payload;
    },
  },
});
export const googleUserActions = googleUserSlice.actions;
export default googleUserSlice;
