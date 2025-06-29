import styles from "../assets/styles/cmps/Footer.module.scss"
import { useMedia } from "../hooks/useMedia";
import { footerTexts } from "../assets/texts/texts";

export const Footer = () => {
    const media = useMedia();
    return(
        <div className={styles[`footer--${media}`]}>
            <div className = {styles.texts}>
                <span>{footerTexts.contact}</span>
                <span>{footerTexts.terms}</span>
                <span>{footerTexts.privacy}</span>
            </div>
        </div>
    )
}