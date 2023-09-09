import { createSlice } from "@reduxjs/toolkit";
const initialTripState = {
  tripData: [],
};
const tripSlice = createSlice({
  name: "trips",
  initialState: initialTripState,
  reducers: {
    onAddTrips(state, action) {
        const existingTripItems = action.payload
        const findItems = state.tripData.find((trip)=> trip.id === existingTripItems.id )
    if (!findItems) {
     state.tripData.push({
        id: existingTripItems.id,
        title: existingTripItems.title,
        img: existingTripItems.img,
        name: existingTripItems.name,
        price: existingTripItems.price,
    })
    }
    },
  },
});
export const tripActions = tripSlice.actions;
export default tripSlice;
