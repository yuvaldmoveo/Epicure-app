import { configureStore } from '@reduxjs/toolkit';
import { restaurantReducer } from "./restaurant/restaurant.slice";
import { chefReducer } from "./chef/chef.slice";
import { dishReducer } from "./dish/dish.slice";
import { useDispatch, useSelector } from "react-redux";
import type {  TypedUseSelectorHook } from "react-redux";


export const store = configureStore({
  reducer: {
      restaurantModule: restaurantReducer,
  chefModule: chefReducer,
  dishModule: dishReducer,
  },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;