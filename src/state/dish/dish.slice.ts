import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dishService } from "../../services/dish.service";
import type { Dish } from "../../types";

export const loadTop = createAsyncThunk("dish/loadTop", async () => {
  const dishes = await dishService.getTopDishes();
  return dishes;
});

export const queryDishes = createAsyncThunk("dish/query", async () => {
  return await dishService.query();
});

export const loadDish = createAsyncThunk(
  "dish/loadDish",
  async (id: string) => {
    const dish = await dishService.getById(id);
    if (!dish) throw new Error("Dish not found");
    return dish;
  }
);

interface DishState {
  top: Dish[];
  all: Dish[];
  selectedDish: Dish | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: DishState = {
  top: [],
  all: [],
  selectedDish: null,
  isLoading: false,
  error: null,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    clearSelectedDish(state) {
      state.selectedDish = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTop.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadTop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.top = action.payload;
      })
      .addCase(loadTop.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load top dishes";
      })
      .addCase(queryDishes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(queryDishes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all = action.payload;
      })
      .addCase(queryDishes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to query dishes";
      })
      .addCase(loadDish.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadDish.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedDish = action.payload;
      })
      .addCase(loadDish.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load dish";
      });
  },
});

export const dishReducer = dishSlice.reducer;
