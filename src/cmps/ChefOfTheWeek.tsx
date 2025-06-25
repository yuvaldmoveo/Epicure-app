import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Chef } from "../types";
import { ChefAbout } from "./ChefAbout";
import { ChefRestaurantList } from "./ChefRestaurantList"
import { useMedia } from "../hooks/useMedia";
import styles from "../assets/styles/cmps/ChefOfTheWeek.module.scss"
import { ChefCard } from "./ChefCard";
import { chefOfTheWeekTexts } from "../assets/texts/texts";

export const ChefOfTheWeek = () => {
    const media = useMedia();
    const [chef, setChef] = useState<Chef | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await api.getChefOfTheWeek();
            setChef(data);
        }
        fetchData();
    }, []);

    if (!chef) return null; //ADD - loading or fallback

    return (
        <section className={styles[`chef-of-the-week--${media}`]}>
            <h2 className={styles.headline}>{chefOfTheWeekTexts.chefHealine}</h2>
            <div className={styles.cardAndAbout}>
                <ChefCard data={chef} media={media} />
                <ChefAbout about={chef.about} media={media} />
            </div>
            <div className={styles.chefRestaurant}>
                <h2 className={styles.restaurantHeadline}>
                    {chef.name.split(" ")[0]}{chefOfTheWeekTexts.chefOfTheWeekRestaurants}
                </h2>
                <ChefRestaurantList restaurantIds={chef.restaurants} media={media} />
            </div>
        </section>
    );
};