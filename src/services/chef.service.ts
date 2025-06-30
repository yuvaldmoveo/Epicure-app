import type { Chef } from "../types";
import { mockChefs } from "./mocks/mockChefs";

export const chefService = {
  query: async (): Promise<Chef[]> => {
    return mockChefs;
  },

  getChefOfTheWeek: async (): Promise<Chef | null> => {
    return mockChefs.find((chef) => chef.isChefOfTheWeek) || null;
  },

  getById: async (chefId: string): Promise<Chef | null> => {
    return mockChefs.find((chef) => chef.id === chefId) || null;
  },
};
