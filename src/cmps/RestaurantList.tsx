import { useEffect, useState } from 'react'
import { RestaurantCard } from './RestaurantCard'
import { api } from '../services/api'
import type { Restaurant } from '../types'
import type { Media } from '../hooks/useMedia'
import styles from '../assets/styles/cmps/RestaurantList.module.scss'
import { Carousel } from './Carousel'

interface RestaurantListProps {
  media: Media
}

export const RestaurantList = ({ media }: RestaurantListProps) => {
  const [topRestaurants, setTopRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    const fetchTopRestaurants = async () => {
       const data =  await api.getTopRatedRestaurants()
      setTopRestaurants(data)
    }
    fetchTopRestaurants()
  }, [])

  return (
  <>
    {media === 'mobile' ? (
      <div className={styles[`restaurant-list--${media}`]}>
        <Carousel
          items={topRestaurants}
          itemKey={(restaurant) => restaurant.id}
          renderItem={(restaurant) => (
            <RestaurantCard data={restaurant} media={media} />
          )}
        />
      </div>
    ) : (
      <section className={styles[`restaurant-list--${media}`]}>
        {topRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            data={restaurant}
            media={media}
          />
        ))}
      </section>
    )}
  </>
)

}
