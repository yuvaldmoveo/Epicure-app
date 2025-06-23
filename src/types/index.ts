export interface Restaurant {
    id: string;
    name: string;
    chefId: string;
    dishes: string[];
    rate: number;
    address: string;
    location: string;
    openingHours: string[];
    pictureUrl: string;
}

export interface Dish {
    id: string;
    name: string;
    restaurantId: string;
    icons: string[];
    ingredients: string;
    price: number;
    isAvailable: boolean;
    pictureUrl: string;
}

export interface Chef {
    id: string;
    name: string;
    about: string;
    isChefOfTheWeek: boolean;
    pictureUrl: string;
    restaurants: string[];
}