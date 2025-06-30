import type { Media } from '../hooks/useMedia'
import type { Dish } from '../types'
import styles from '../assets/styles/cmps/DishCard.module.scss'
import { renderIcons } from '../utils/renderIcons'

interface DishCardProps {
  data: Dish
  media: Media
}

export const DishCard = ({ data, media }: DishCardProps) => {
  const { name, ingredients, pictureUrl, price, icons } = data
  const formattedName = name.replace(' ', '\n');

  const ingredientsEl = (
    <p className={styles.ingredients}>{ingredients}</p>
  )

  const iconsEl = renderIcons({
    icon: icons,
    media,
    iconBoxClass: styles.iconBox,
    iconClass: styles.icon,
  })


  if (!media) return null

  return (
    <article className={styles[`dish-card--${media}`]}>
      <img src={pictureUrl} alt={name} className={styles.image} />
      <div className={styles.data}>
        <div className={styles.textBox}>
          <h3 className={styles.name}>{formattedName}</h3>
          {media === 'mobile' ? (
            <>
              {ingredientsEl}
              {iconsEl}
            </>
          ) : (
            <>
              {iconsEl}
              {ingredientsEl}
            </>
          )}
        </div>

        {media === 'desktop' ? (
          <>
            <div className={styles.priceWrapper}>
              <span className={styles.line}></span>
              <div className={styles.priceBox}>
                {renderIcons({
                  icon: "ILS",
                  iconClass: styles.ilsIcon,
                })}
                <span className={styles.priceText}>{price}</span>
              </div>
              <span className={styles.line}></span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.priceWrapper}>
              {renderIcons({
                icon: "ILS",
                iconClass: styles.ilsIcon,
              })}
              <span className={styles.priceText}>{price}</span>
            </div>
          </>
        )}
      </div>
    </article>
  );
};
