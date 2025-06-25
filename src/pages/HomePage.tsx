import styles from "../assets/styles/pages/HomePage.module.scss";
import { HeroSearch } from '../cmps/HeroSearch';
import { RestaurantCard } from '../cmps/RestaurantCard';
import { DishCard } from '../cmps/DishCard';
import { ChefCard } from '../cmps/ChefCard';
import { useMedia } from '../hooks/useMedia';
import { AboutUs } from "../cmps/AboutUs";
import { Footer } from "../cmps/Footer";
import { homePageTexts } from "../assets/texts/texts";
import { RestaurantList } from "../cmps/RestaurantList";

const mockDish = {
    id: "dish-smoked-pizza",
    name: "Smoked Pizza",
    restaurantId: "1",
    ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish',
    price: 88,
    isAvailable: true,
    pictureUrl: 'src/assets/pictures/dish/smoked-pizza.png',
    icons: ["spicy"]
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
    const media = useMedia();
    //const media = "mobile";
    console.log(media)
    return (
        <>
            <HeroSearch />
            <div className={styles[`homepage-main-frame--${media}`]}>
                <div className={styles[`restaurant-frame`]}>
                    <h2 className={styles[`restaurant-headline`]}>{homePageTexts.restaurantsHeadline}</h2>
                    <RestaurantList media={media} />
                    <button className={styles[`restaurant-button`]}>{homePageTexts.restaurantNavText}</button>
                </div>
                <DishCard data={mockDish} media={media} />
                <ChefCard data={mockChef} media={media} />
                <AboutUs/>
                <Footer/>
            </div>
        </>
    )

}