import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reviewSlice";

/**
 * Redux store configuration
 * Currently manages review-related state through reviewReducer
 * Can be extended with additional reducers as the app grows
 */
export const store = configureStore({
  reducer: {
    reviews: reviewReducer,
  },
});

// Infer the `RootState` type from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store
export type AppDispatch = typeof store.dispatch;
