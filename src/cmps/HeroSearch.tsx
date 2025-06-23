import { useMedia } from "../hooks/useMedia";
import styles from "/src/assets/styles/cmps/HeroSearch.module.scss";
import { heroSearchTexts } from "../assets/texts/texts";

export const HeroSearch = () => {
    const media = useMedia();

    return (
        <section className={styles[`heroSearch--${media}`]}>
            <div className={styles[`content--${media}`]}>
                <h1 className={styles.headline}>
                    {heroSearchTexts.headline}
                </h1>
                <input
                    type="text"
                    placeholder={heroSearchTexts.searchPlaceholder}
                    className={styles[`input--${media}`]}
                />
            </div>
        </section>
    )
}