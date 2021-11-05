import icon from '../../images/portfolio__icon.svg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio">
        <div className="page__container">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__links">
                <li className="portfolio__list"><a href="https://nsotnikov16.github.io/how-to-learn/"
                        className="portfolio__link">
                        <p className="portfolio__text">Статичный сайт</p>
                        <img src={icon} alt="icon" className="portfolio__icon"/>
                    </a></li>
                <li className="portfolio__list"><a href="https://nsotnikov16.github.io/russian-travel/"
                        className="portfolio__link">
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <img src={icon} alt="icon" className="portfolio__icon"/>
                    </a></li>
                <li className="portfolio__list"><a href="https://byns16.nomoredomains.club/"
                        className="portfolio__link">
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <img src={icon} alt="icon" className="portfolio__icon"/>
                    </a></li>

            </ul>
        </div>

    </section>
    )
}

export default Portfolio