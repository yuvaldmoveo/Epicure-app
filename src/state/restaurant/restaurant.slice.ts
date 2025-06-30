import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { restaurantService } from "../../services/restaurant.servics";
import type { Restaurant } from "../../types";

export const loadTopRatedRestaurants = createAsyncThunk(
  "restaurant/loadTopRated",
  async () => {
    const restaurants = await restaurantService.getTopRatedRestaurants();
    return restaurants;
  }
);

export const queryRestaurants = createAsyncThunk(
  "restaurant/query",
  async () => {
    return await restaurantService.query();
  }
);

export const loadRestaurant = createAsyncThunk(
  "restaurant/loadRestaurant",
  async (id: string) => {
    const restaurant = await restaurantService.getById(id);
    if (!restaurant) throw new Error("Restaurant not found");
    return restaurant;
  }
);

interface RestaurantState {
  topRated: Restaurant[];
  all: Restaurant[];
  selectedRestaurant: Restaurant | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  topRated: [],
  all: [],
  selectedRestaurant: null,
  isLoading: false,
  error: null,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    clearSelectedRestaurant(state) {
      state.selectedRestaurant = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTopRatedRestaurants.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadTopRatedRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topRated = action.payload;
      })
      .addCase(loadTopRatedRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load top restaurants";
      })
      .addCase(queryRestaurants.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(queryRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all = action.payload;
      })
      .addCase(queryRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to query restaurants";
      })
      .addCase(loadRestaurant.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadRestaurant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedRestaurant = action.payload;
      })
      .addCase(loadRestaurant.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load restaurant";
      });
  },
});

export const restaurantReducer = restaurantSlice.reducer;
