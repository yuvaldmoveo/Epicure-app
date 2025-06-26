import styles from '../assets/styles/cmps/MobileHeader.module.scss'

export const MobileHeader = () => {
  return (
    <div className={styles['mobile-header']}>
      <button className={styles.menuButton}>
        <img className={styles.menuImage} src="/src/assets/icons/Hamburger.svg" alt="Menu" />
      </button>
      <img
        className={styles.logo}
        src="/src/assets/icons/Logo.svg"
        alt="Epicure logo"
      />
    </div>
  )
}
