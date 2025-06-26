import styles from "../assets/styles/cmps/AboutUs.module.scss"
import { aboutUsTexts } from "../assets/texts/texts";
import { useMedia } from "../hooks/useMedia"
import { LoremIpsum } from 'react-lorem-ipsum';


export const AboutUs = () => {

    const media = useMedia();
    return (
        <article className={styles[`about-us--${media}`]}>
            <div className={styles.leftContent}>
                <h2 className={styles.header}>{aboutUsTexts.headline}</h2>
                <div className={styles.text}>
                    <LoremIpsum p={1.5} />
                </div>
                <div className={styles.downloadButtons}>
                    <span className={styles.downloadApple}>
                        <img src="/src/assets/icons/DownloadButtonApple.svg" alt="Download App Store" />
                    </span>
                    <span className={styles.downloadGoogle}>
                        <img src="/src/assets/icons/DownloadButtonGoogle.svg" alt="Download Google Play" />
                    </span>
                </div>
            </div>
            <div className={styles.appLogo}>
                <img src="/src/assets/icons/AboutUsLogo.svg" alt="Epicure logo" />
            </div>
        </article>

    )

}