import { renderIcons } from '../utils/renderIcons'
import { useMedia } from '../hooks/useMedia'
import styles from "../assets/styles/cmps/IconList.module.scss"
import { capitalize } from 'lodash'
const iconKeys = ["spicy", "vegetarian", "vegan"]

export const IconList = () => {
    const media = useMedia();

    return (
        <section className={styles[`iconList--${media}`]}>
            <div className={styles.icons}>
                {iconKeys.map((key) => (
                    <div key={key} className={styles.iconBox}>
                        {renderIcons({
                            icon: key,
                            media,
                            iconClass: styles.icon,
                        })}
                        <p className={styles.label}>
                            {capitalize(key.charAt(0)) + key.slice(1)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}