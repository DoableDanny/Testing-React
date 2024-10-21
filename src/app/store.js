// Example Redux store to demonstrate testing components using Redux

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // other reducers... e.g.:
    // user: userReducer,
  },
});
