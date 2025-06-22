import type { Media } from '../hooks/useMedia'
import type { Dish } from '../types'
import styles from '../assets/styles/cmps/DishCard.module.scss'

interface DishCardProps {
    data: Dish
    media: Media
}

export const DishCard = ({data, media} : DishCardProps) => {
    const {name, ingredients, pictureUrl, price, icons } = data

    const renderIcons = () => (
    <div className={styles.iconBox}>
      {icons.map((icon) => (
        <img
          key={icon}
          src={`/src/assets/icons/Type=${capitalize(icon)}, Size=${media === 'mobile' ? 'Small' : 'Big'}.svg`}
          alt={`${icon} icon`}
          className={styles.icon}
        />
      ))}
    </div>
  )

    const renderPrice = () => (
    <div className={styles.priceBox}>
      <hr className={styles.line} />
      <span className={styles.price}>{price}</span>
      <img src="/src/assets/icons/ILS.svg" alt="ILS" className={styles.ilsIcon} />
      <hr className={styles.line} />
    </div>
  )
  
  
    if (!media) return null
   return (
    <article className={styles[`dish-card--${media}`]}>
      <img src={pictureUrl} alt={name} className={styles.image} />
      <div className={styles.data}>
        {media === 'desktop' ? (
          <>
            <h3 className={styles.name}>{name}</h3>
            {renderIcons()}
            <p className={styles.ingredients}>{ingredients}</p>
            {renderPrice()}
          </>
        ) : (
          <>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.ingredients}>{ingredients}</p>
            {renderIcons()}
            {renderPrice()}
          </>
        )}
      </div>
    </article>
  )
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
