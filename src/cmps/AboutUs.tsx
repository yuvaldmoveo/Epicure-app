import styles from "../assets/styles/cmps/AboutUs.module.scss"
import { useMedia } from "../hooks/useMedia"

export const AboutUs = () => {

    const media = useMedia();
    return (
        <article className={styles[`about-us--${media}`]}>
                ABOUT US PLACE HOLDER
        </article>
    )

}