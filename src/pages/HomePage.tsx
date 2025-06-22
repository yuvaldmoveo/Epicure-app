//import styles from "../assets/styles/pages/HomePage.module.scss";
import { HeroSearch } from '../cmps/HeroSearch';
import { RestaurantCard } from '../cmps/RestaurantCard';
import { DishCard } from '../cmps/DishCard';
import { ChefCard } from '../cmps/ChefCard';
import { useMedia } from '../hooks/useMedia';



const mockDish = {
    id: "dish-smoked-pizza",
    name: "Smoked Pizza",
    restaurantId: "1",
    ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
    price: 65,
    isAvailable: true,
    pictureUrl: 'src/assets/pictures/dish/smoked-pizza.png',
    icons: ["spicy"]
}
const mockRestaurant = {
    id: '1',
    name: 'Claro',
    chefId: 'chef-ran-shmueli',
    dishes: [],
    rate: 4,
    address: 'Rothschild Blvd 1, Tel Aviv',
    location: '32.066157, 34.777819',
    openingHours: ["10:00-22:00", "10:00-22:00", "10:00-22:00", "10:00-22:00", "10:00-22:00", "Closed", "Closed"],
    pictureUrl: "/src/assets/pictures/restaurant/claro.png"
}
const mockChef = {
    id: "chef-aviv-moshe",
    name: "Aviv Moshe",
    about: "Chef Aviv Moshe brings innovative techniques to traditional Israeli dishes.",
    isChefOfTheWeek: true,
    pictureUrl: "/src/assets/pictures/chef/chef-aviv-moshe.jpg",
    restaurants: ["3"]
}

export const HomePage = () => {
    const media = useMedia()

    return (
        <>
            <HeroSearch />
            <RestaurantCard data={mockRestaurant} media={media} />
            <DishCard data={mockDish} media={media} />
            <ChefCard data={mockChef} media={media} />
        </>
    )

}