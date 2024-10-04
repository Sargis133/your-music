import {Link} from "react-router-dom";

function Home() {
    const admPanelLinks = [
        {'path': '/adm', 'name': 'Home', 'color': '#ff3a0f'},
        {'path': 'artists', 'name': 'Artists', 'color': '#d8c804'},
        {'path': 'events', 'name': 'Events', 'color': '#33b800'},
        {'path': 'news', 'name': 'News', 'color': '#e20000'},
        {'path': 'tours', 'name': 'Tours', 'color': '#0097e2'},
        {'path': 'featured', 'name': 'Featured', 'color': '#c300e2'},
        {'path': 'tickets', 'name': 'Tickets', 'color': '#00e2ca'},
    ]

    return(
        <div className="home-page">
            <div className="home-page__link-items">
                {
                    admPanelLinks.map((item, index) => {
                        return(
                            <div key={index} className="home-page__link-item" style={{background: item.color}}>
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;