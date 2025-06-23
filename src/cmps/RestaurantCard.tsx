import { useEffect, useState } from 'react'
import type { Media } from '../hooks/useMedia'
import type { Restaurant } from '../types'
import { api } from '../services/api'
import styles from '../assets/styles/cmps/RestaurantCard.module.scss'


interface RestaurantCardProps {
    data: Restaurant
    media: Media
}


export const RestaurantCard = ({ data, media }: RestaurantCardProps) => {
    const { name, pictureUrl, rate, chefId } = data
    const [chefName, setChefName] = useState<string>('')

    useEffect(() => {
        const loadChef = async () => {
            const chef = await api.getChefById(chefId)
            setChefName(chef?.name || 'Default Chef')
        }
        loadChef()
    }, [chefId])

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, i) => {
            const filled = i < rate
            return (
                <span
                    key={i}
                    className={`${styles.star} ${filled ? styles.filled : styles.empty}`}
                >
                    ★
                </span>
            )
        })

    }


    return (
        <article className={styles[`restaurant-card--${media}`]}>
            <img src={pictureUrl} alt={name} className={styles.image} />
            <div className={styles.data}>
                <div className={styles.textBox}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.chef}>{chefName}</p>
                    {media === 'desktop' && (
                        <div className={styles.ratingBox}>
                            {renderStars()}
                        </div>
                    )}
                </div>
            </div>
        </article>


    )
}