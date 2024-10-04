import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function LatestNews() {
    const [latestNews, setLatestNews] = useState([])

    // FETCH - Main Page Latest News

    async function getLatestNewsData() { // popular news-i fetch
        await fetch("/config/news.json") // popular news-i data
            .then(res => res.json())
            .then(data => {
                if(data) {
                    sortLatestNews(data.news)
                }
            })
    }

    function sortLatestNews(news) {
        news = news.sort((a,b) => +b.rating.localeCompare(+a.rating))
        if(news.length > 3) news = news.slice(0, 3)
        setLatestNews(news)
    }

    useEffect(() => {
        getLatestNewsData()
    }, []);

    return(
        <div className="latest-news wrapper">
            <p className="latest-news__title">Latest news</p>
            <div className="latest-news__cols">

                {latestNews.map((news, index) => (
                    <div className="latest-news__col" key={news.id || index}>
                        {index % 2 === 0 ? (
                            <>
                                <img
                                    src={news.image}
                                    alt="news-image"
                                    className="latest-news__col-image"
                                />
                                <Link to="/news" className="latest-news__col-date">{news.date}</Link>
                                <p className="latest-news__col-title">{news.title}</p>
                                <p className="latest-news__col-text">
                                    {news.description.split(' ').slice(0, 35).join(' ')} ...
                                </p>
                                <Link to="/news" className="latest-news__link">Read More</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/news" className="latest-news__link">Read more</Link>
                                <Link to="/news" className="latest-news__col-date">{news.date}</Link>
                                <p className="latest-news__col-title">{news.title}</p>
                                <p className="latest-news__col-text">
                                    {news.description.split(' ').slice(0, 35).join(' ')} ...
                                </p>
                                <img
                                    src={news.image}
                                    alt=""
                                    className="latest-news__col-image"
                                />
                            </>
                        )}
                    </div>
                ))}


            </div>
        </div>
    )
}

export default LatestNews;