import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import googleUserSlice from "./googleUser-slice";
import phoneUserSlice from "./phoneUser-slice";
import gitUserSlice from "./gitUser-slice";
import facebookUserSlice from "./facebookUser";
import bookingSlice from "./booking-slice";
import tripSlice from "./trips-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    google: googleUserSlice.reducer,
    phone: phoneUserSlice.reducer,
    git: gitUserSlice.reducer,
    facebook: facebookUserSlice.reducer,
    bookings: bookingSlice.reducer,
    trips:tripSlice.reducer,
  },
});
export default store;
