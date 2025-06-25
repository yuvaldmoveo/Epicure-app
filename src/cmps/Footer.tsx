import styles from "../assets/styles/cmps/Footer.module.scss"
import { useMedia } from "../hooks/useMedia";

export const Footer = () => {

    const media = useMedia();

    return(
        <div className={styles[`footer--${media}`]}>
            FOOTER PLACE HOLDER
        </div>
    )
}