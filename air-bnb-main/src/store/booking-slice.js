import { createSlice } from "@reduxjs/toolkit";
const initialModalState = {
  items:[]
};
const bookingSlice = createSlice({
  name: "bookings",
  initialState: initialModalState,
  reducers: {
    onSendItems(state, action) {
      const newItems = action.payload
      state.items.push({
        noOfDays:newItems.noOfDays, 
          nightSpent:newItems.nightSpent, 
          weeklyStayDiscount: newItems.weeklyStayDiscount, 
          airbnbFee:newItems.airbnbFee, 
          totalFee:newItems.totalFee,
      })
    },
    
  },
});
export const bookingSliceActions = bookingSlice.actions;
export default bookingSlice;
