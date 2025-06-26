import type { Restaurant, Dish, Chef } from '../types/index'
import { mockChefs } from './mocks/mockChefs';
import { mockDishes  } from './mocks/mockDishes';
import { mockRestaurants } from './mocks/mockRestaurants';

// MOCK API
const getTopRatedRestaurants = async (): Promise<Restaurant[]> => {
  return mockRestaurants.sort((a, b) => b.rate - a.rate).slice(0, 3);
};

const getDishes = async (): Promise<Dish[]> => {
  return mockDishes.slice(0, 3);
};

const getChefOfTheWeek = async (): Promise<Chef | null> => {
  return mockChefs.find((chef) => chef.isChefOfTheWeek) || null;
};

const getChefById = async (chefId: string): Promise<Chef | null> =>{
  return mockChefs.find((chef) => chef.id === chefId ) || null
}

const getRestaurantById = async (RestaurantId: string): Promise<Restaurant | null> => {
  return mockRestaurants.find((restaurant) => restaurant.id === RestaurantId) || null
}

export const api = {
  getTopRatedRestaurants,
  getDishes,
  getChefOfTheWeek,
  getChefById,
  getRestaurantById
}