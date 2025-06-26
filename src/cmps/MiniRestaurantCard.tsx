import type { Restaurant } from "../types";
import type { Media } from "../hooks/useMedia";
import styles from "../assets/styles/cmps/MiniRestaurantCard.module.scss";
import { RestaurantCard } from "./RestaurantCard";

interface Props {
  restaurant: Restaurant;
  media: Media;
}

export const MiniRestaurantCard = ({ restaurant, media }: Props) => {
  if (media === "mobile") {
    return <RestaurantCard data={restaurant} media={media} />;
  }

  return (
    <div className={styles.card}>
      <img
        src={restaurant.pictureUrl}
        alt={restaurant.name}
        className={styles.image}
      />
      <div className={styles.data}>
      <div className={styles.name}>{restaurant.name}</div>
      </div>
    </div>
  );
};
