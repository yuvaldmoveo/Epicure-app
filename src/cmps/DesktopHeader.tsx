import { Link } from 'react-router-dom'
import styles from '../assets/styles/cmps/DesktopHeader.module.scss'
import { desktopHeaderTexts } from '../assets/texts/texts'

export const DesktopHeader = () => {
  return (
    <div className={styles['desktop-header']}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logoImage} src="/src/assets/icons/Logo.svg" alt="Epicure logo" />
        <h2 className={styles.logoText}>{desktopHeaderTexts.appName}</h2>
      </Link>
      <nav className={styles.nav}>
        <Link to="/restaurants" className={styles.link}>
          {desktopHeaderTexts.resNav}
        </Link>
        <Link to="/chefs" className={styles.link}>
           {desktopHeaderTexts.chefNav}
        </Link>
      </nav>
    </div>
  )
}
