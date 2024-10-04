import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Pagination from "react-js-pagination";

function News() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPageItems, setSelectedPageItems] = useState([]);
    const newsTextContents = useRef([])
    const showTextBtn = useRef([])
    const hideTextBtn = useRef([])

    // FETCH - All News
    async function getNewsData() { // news-i fetch
        const response = await fetch("/config/news.json"); // news-i data
        const data = await response.json();
        if (data) {
            setNews(data.news);

            changePage(1, data.news);
        }
    }


    function changePage(page, newsData = news) {
        setCurrentPage(page);
        const sliceStart = (page - 1) * 3;
        const slicedNews = newsData.slice(sliceStart, sliceStart + 3);
        setSelectedPageItems(slicedNews);
        window.scrollTo({
            top: 250,
            left: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        getNewsData();
    }, []);

    function onShowNewsHiddenText(btn, index) {
        newsTextContents.current[index]?.classList.add('news-row__text-row__show')
        showTextBtn.current[index]?.classList.add('hidden')
        hideTextBtn.current[index]?.classList.remove('hidden')
    }

    function onHideNewsText(btn, index) {
        newsTextContents.current[index]?.classList.remove('news-row__text-row__show')
        showTextBtn.current[index]?.classList.remove('hidden')
        hideTextBtn.current[index]?.classList.add('hidden')
    }

    return(
        <div className="news-page">

            <PageTitle title="Blog" image="https://preview.colorlib.com/theme/music/images/blog.jpg.webp"/>

            <div className="news-page__news-rows wrapper">

                {selectedPageItems.length > 0 &&
                    selectedPageItems.map((news, index) => {
                        return (
                            <div className="news-page__news-row" key={news.id}>
                                <div className="news-row__image">
                                    <img src={news.image} alt="image"/>
                                </div>
                                <div className="news-row__description-rows">
                                    <div className="news-row__text-row" ref={(ref) => {newsTextContents.current[index] = ref}}>
                                        <Link to="/news"
                                              className="news-row__date latest-news__col-date">{news.date}</Link>
                                        <Link to="/news"
                                              className="news-row__title latest-news__col-title">{news.title}</Link>
                                        <p className="news-row__creator">
                                            By
                                            <Link to="/" className="news-row__creator-link"> {news.creator}</Link> |
                                            <span className="news-row__category"> {news.category}</span>
                                        </p>
                                        <p className="news-row__description">{news.description}</p>
                                    </div>
                                    <button
                                        className="latest-news__link news-row__link"
                                        onClick={(e) => onShowNewsHiddenText(e, index)}
                                        ref={(ref) => {showTextBtn.current[index] = ref}}
                                    >more...</button>
                                    <button
                                        className="latest-news__link news-row__link hidden"
                                        onClick={(e) => onHideNewsText(e, index)}
                                        ref={(ref) => {hideTextBtn.current[index] = ref}}
                                    >less</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className="news-page__pagination wrapper">
                <Pagination totalItemsCount={news.length} itemsCountPerPage={3} activePage={currentPage} onChange={(e) => changePage(e)} />
            </div>

            <div className="news-page__featured-news">
                <div className="featured-news__image">
                    <img src="https://preview.colorlib.com/theme/music/images/featured_news.jpg.webp" alt=""/>
                </div>
                <div className="featured-news__text-rows">
                    <p className="featured-news__title featured-block__title">Featured News</p>
                    <p className="featured-news__date featured-block__subtitle">Oct 19, 2018</p>
                    <p className="featured-news__news-title">Music Seminary at Festival</p>
                    <p className="featured-news__description featured-block__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, neque ac porttitor scelerisque, nisi nisl tincidunt enim, non aliquet diam neque sed urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lorem luctus ligula volutpat fermentum. Nulla auctor odio sit amet dui lobortis aliquet. Donec leo eros, faucibus vitae finibus a, tincidunt vehicula eros. Morbi aliquet sem euismod venenatis elementum. Proin laoreet sapien sit amet posuere sollicitudin. Mauris quis faucibus velit.
                    </p>
                </div>
            </div>

            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default News;