import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: "korean" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export const { change } = languageSlice.actions;
export default languageSlice.reducer;
