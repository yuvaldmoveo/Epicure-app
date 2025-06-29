import styles from "../assets/styles/cmps/AboutUs.module.scss"
import { aboutUsTexts } from "../assets/texts/texts";
import { useMedia } from "../hooks/useMedia"
import { LoremIpsum } from 'react-lorem-ipsum';


export const AboutUs = () => {
    const media = useMedia();

    const appLogo = (
        <div className={styles.appLogoSection}>
            <img className = {styles.appLogoImg} src="/src/assets/icons/AboutUsLogo.svg" alt="Epicure logo" />
        </div>
    );

    const downloadButtons = (
        <div className={styles.downloadButtons}>
            <span className={styles.downloadGoogle}>
                <img src="/src/assets/icons/DownloadButtonGoogle.svg" alt="Download Google Play" />
            </span>
            <span className={styles.downloadApple}>
                <img src="/src/assets/icons/DownloadButtonApple.svg" alt="Download App Store" />
            </span>
        </div>
    );

    const textBlock = (
        <div className={styles.text}>
            <LoremIpsum p={1.5} />
        </div>
    );

    const headline = (
        <h2 className={styles.header}>{aboutUsTexts.headline}</h2>
    );

    return (
        <article className={styles[`about-us--${media}`]}>
            
            {media === 'mobile' ? (
                <div className={styles.mobileContent}>
                    {appLogo}
                    {downloadButtons}
                    {headline}
                    {textBlock}
                </div>
            ) : (
                <div className={styles.leftContent}>
                    {headline}
                    {textBlock}
                    {downloadButtons}
                </div>
            )}
        </article>
    );
};
