import type { Media } from '../hooks/useMedia'
import type { Chef } from '../types'
import styles from '../assets/styles/cmps/ChefCard.module.scss'

interface ChefCardProps {
  data: Chef
  media: Media
}

export const ChefCard = ({ data, media }: ChefCardProps) => {
  const { name, pictureUrl } = data

  return (
    <article className={styles[`chef-card--${media}`]}>
      <img src={pictureUrl} alt={name} className={styles.image} />
      <div className={styles.name}>{name}</div>
    </article>
  )
}
