import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Restaurant } from "../types";
import type { Media } from "../hooks/useMedia";
import { MiniRestaurantCard } from "./MiniRestaurantCard";
import styles from "../assets/styles/cmps/ChefRestaurantList.module.scss";

interface ChefRestaurantListProps {
    restaurantIds: string[] | string;
    media: Media;
}

export const ChefRestaurantList = ({ restaurantIds, media }: ChefRestaurantListProps) => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const ids = Array.isArray(restaurantIds) ? restaurantIds : [restaurantIds];
            const data = await Promise.all(
                ids.map(async (id) => {
                    const res = await api.getRestaurantById(id);
                    return res;
                })
            );
            setRestaurants(data.filter(Boolean) as Restaurant[]);
        };

        fetchRestaurants();
    }, [restaurantIds]);

    return (
        <div className={styles[`chef-restaurant-list--${media}`]}>
            <div className={styles.restaurants}>
                {restaurants.map((r) => (
                    <MiniRestaurantCard key={r.id} restaurant={r} media={media} />
                ))}
            </div>
        </div>
    );
};
