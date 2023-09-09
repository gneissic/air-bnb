import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
  facebookUser: false,
};
const facebookUserSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setFacebookUser(state, action) {
      state.facebookUser = action.payload;

    },
  },
});
export const facebookUserActons = facebookUserSlice.actions;
export default facebookUserSlice;
