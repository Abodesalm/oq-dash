import { configureStore } from "@reduxjs/toolkit";
import queriesReducer from "./slice";

export const store = configureStore({
  reducer: {
    queries: queriesReducer,
  },
});
