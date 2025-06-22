import styles from "/src/assets/styles/cmps/HeroSearch.module.scss";


export const HeroSearch = () => {
    return (
        <section className = {styles.heroSearch}>
            <div className = {styles.content}>
                <h2 className = {styles.headline}>
                    Epicure works with the top chef restaurants in Tel Aviv
                </h2>
                <input
                type = "text"
                placeholder = "Search for restaurant cuisine, chef"
                className = {styles.input}
                />
            </div>
        </section>
    )
}