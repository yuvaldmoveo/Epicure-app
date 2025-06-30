import type { Dish } from "../types";
import { mockDishes } from "./mocks/mockDishes";

export const dishService = {
  getTopDishes: async (): Promise<Dish[]> => {
    return mockDishes.slice(0, 3);
  },

  query: async (): Promise<Dish []> => {
    return mockDishes;
  },

  getById: async(id: string): Promise<Dish | null> => {
    return mockDishes.find(d => d.id === id) || null;
  }
};
