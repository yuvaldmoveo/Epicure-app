import { useEffect, useState } from 'react'
import { RestaurantCard } from './RestaurantCard'
import { api } from '../services/api'
import type { Restaurant } from '../types'
import type { Media } from '../hooks/useMedia'
import styles from '../assets/styles/cmps/RestaurantList.module.scss'

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
    <section className={styles[`restaurant-list--${media}`]}>
      {topRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} data={restaurant} media={media} />
      ))}
    </section>
  )
}
