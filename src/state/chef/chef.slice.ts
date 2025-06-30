import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chefService } from "../../services/chef.service";
import type { Chef } from "../../types";

export const loadChefOfWeek = createAsyncThunk(
  "chef/loadChefOfWeek",
  async () => {
    const chef = await chefService.getChefOfTheWeek();
    return chef;
  }
);

export const queryChefs = createAsyncThunk("chef/query", async () => {
  return await chefService.query();
});
export const loadChef = createAsyncThunk(
  "chef/loadChef",
  async (id: string) => {
    const chef = await chefService.getById(id);
    if (!chef) throw new Error("Chef not found");
    return chef;
  }
);

interface ChefState {
  chefOfWeek: Chef | null;
  all: Chef[];
  selectedChef: Chef | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ChefState = {
  chefOfWeek: null,
  all: [],
  selectedChef: null,
  isLoading: false,
  error: null,
};

const chefSlice = createSlice({
  name: "chef",
  initialState,
  reducers: {
    clearSelectedChef(state) {
      state.selectedChef = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadChefOfWeek.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadChefOfWeek.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chefOfWeek = action.payload;
      })
      .addCase(loadChefOfWeek.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load chef of the week";
      })
      .addCase(loadChef.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadChef.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedChef = action.payload;
      })
      .addCase(loadChef.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to load chef";
      })
      .addCase(queryChefs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(queryChefs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.all = action.payload;
      })
      .addCase(queryChefs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to query chefs";
      });
  },
});

export const chefReducer = chefSlice.reducer;
