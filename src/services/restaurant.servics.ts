import type { Restaurant } from "../types";
import { mockRestaurants } from "./mocks/mockRestaurants";

export const restaurantService = {
  query: async (): Promise<Restaurant[]> => {
    return mockRestaurants;
  },

  getTopRatedRestaurants: async (): Promise<Restaurant[]> => {
    return mockRestaurants.sort((a, b) => b.rate - a.rate).slice(0, 3);
  },

  getById: async (
    RestaurantId: string
  ): Promise<Restaurant | null> => {
    return (
      mockRestaurants.find((restaurant) => restaurant.id === RestaurantId) ||
      null
    );
  },
};
