import { useMedia } from "../hooks/useMedia";
import { RestaurantCard } from "./RestaurantCard";
import { DishCard } from "./DishCard";
import { ChefCard } from "./ChefCard";

type  CardType = 'restaurant' | 'dish' | 'chef'


interface CardProps {
    type: CardType
    data: any
}

export const Card = ({type, data} : CardProps) =>{
    const media = useMedia();

    switch(type){
        case 'restaurant':
            return <RestaurantCard data={data} media={media} />
        case 'dish':
            return <DishCard data={data} media={media} />
        case 'chef':
            return <ChefCard data={data} media={media} />
        default:
            return null
    }
}