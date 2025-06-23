import { useMedia } from "../hooks/useMedia";
import styles from "/src/assets/styles/cmps/HeroSearch.module.scss";


export const HeroSearch = () => {
    const media = useMedia();

    return (
        <section className={styles[`heroSearch--${media}`]}>
            <div className={styles[`content--${media}`]}>
                <h1 className={styles.headline}>
                    Epicure works with the top chef restaurants in Tel Aviv
                </h1>
                <input
                    type="text"
                    placeholder="Search for restaurant cuisine, chef"
                    className={styles[`input--${media}`]}
                />
            </div>
        </section>
    )
}