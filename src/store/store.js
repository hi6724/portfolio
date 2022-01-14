import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/languageReducer";
export const store = configureStore({
  reducer: {
    languageReducer: languageReducer,
  },
});
