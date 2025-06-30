import { useEffect, useState } from 'react'
import { DishCard } from './DishCard'
import { api } from '../services/api'
import type { Dish } from '../types'
import type { Media } from '../hooks/useMedia'
import styles from "../assets/styles/cmps/DishList.module.scss"
import { Carousel } from './Carousel'

interface DishListProps {
    media: Media
}

export const DishList = ({ media }: DishListProps) => {
    const [dishes, setDishes] = useState<Dish[]>([])

    useEffect(() => {
        const fetchDishes = async () => {
            const data = await api.getDishes()
            setDishes(data)
        }
        fetchDishes()
    }, [])

    return (
  <>
    {media === 'mobile' ? (
      <div className={styles[`dish-list--${media}`]}>
        <Carousel
          items={dishes}
          itemKey={(dish) => dish.id}
          renderItem={(dish) => (
            <DishCard data={dish} media={media} />
          )}
        />
      </div>
    ) : (
      <section className={styles[`dish-list--${media}`]}>
        {dishes.map((dish) => (
          <DishCard key={dish.id} data={dish} media={media} />
        ))}
      </section>
    )}
  </>
)

}