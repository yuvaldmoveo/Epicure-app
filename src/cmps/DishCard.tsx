import type { Media } from '../hooks/useMedia'
import type { Dish } from '../types'
import styles from '../assets/styles/cmps/DishCard.module.scss'
import { renderIcons } from '../utils/renderIcons'
import { renderPrice } from '../utils/renderPrice'

interface DishCardProps {
  data: Dish
  media: Media
}

export const DishCard = ({ data, media }: DishCardProps) => {
  const { name, ingredients, pictureUrl, price, icons } = data

  if (!media) return null
  return (
    <article className={styles[`dish-card--${media}`]}>
      <img src={pictureUrl} alt={name} className={styles.image} />
      <div className={styles.data}>
        {media === 'desktop' ? (
          <>
            <h3 className={styles.name}>{name}</h3>
            {renderIcons({
              icons,
              media,
              iconBoxClass: styles.iconBox,
              iconClass: styles.icon,
            })}
            <p className={styles.ingredients}>{ingredients}</p>
            {renderPrice({
              price,
              priceBoxClass: styles.priceBox,
              lineClass: styles.line,
              priceClass: styles.price,
              ilsIconClass: styles.ilsIcon,
            })}
          </>
        ) : (
          <>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.ingredients}>{ingredients}</p>
            {renderIcons({
              icons,
              media,
              iconBoxClass: styles.iconBox,
              iconClass: styles.icon,
            })}
            {renderPrice({
              price,
              priceBoxClass: styles.priceBox,
              lineClass: styles.line,
              priceClass: styles.price,
              ilsIconClass: styles.ilsIcon,
            })}
          </>
        )}
      </div>
    </article>
  );
};
