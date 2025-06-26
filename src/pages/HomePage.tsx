import styles from "../assets/styles/pages/HomePage.module.scss";
import { HeroSearch } from '../cmps/HeroSearch';
import { ChefCard } from '../cmps/ChefCard';
import { useMedia } from '../hooks/useMedia';
import { AboutUs } from "../cmps/AboutUs";
import { Footer } from "../cmps/Footer";
import { homePageTexts } from "../assets/texts/texts";
import { RestaurantList } from "../cmps/RestaurantList";
import { DishList } from "../cmps/DishList";
import { IconList } from "../cmps/IconList";
import { ChefOfTheWeek } from "../cmps/ChefOfTheWeek";

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
    return (
        <>
            <HeroSearch />
            <div className={styles[`homepage-main-frame--${media}`]}>
                <div className={styles[`restaurant-frame`]}>
                    <h2 className={styles[`restaurant-headline`]}>{homePageTexts.restaurantsHeadline}</h2>
                    <RestaurantList media={media} />
                    <button className={styles[`restaurant-button`]}>{homePageTexts.restaurantNavText}</button>
                </div>
                <div className={styles[`dish-frame`]}>
                    <h2 className ={styles[`dish-headline`]}>{homePageTexts.dishHeadline}</h2>
                    <DishList media={media} />
                </div>
                <div className={styles[`icon-frame`]}>
                    <h2 className={styles[`icon-headline`]}>{homePageTexts.iconsHeadline}</h2>
                    <IconList/>
                </div>
                <ChefOfTheWeek />
                <AboutUs/>
                <Footer/>
            </div>
        </>
    )

}