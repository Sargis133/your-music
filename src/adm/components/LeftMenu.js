import Logo from "../../components/Logo";
import {Link, useLocation} from "react-router-dom";
import Icons from "../../components/Icons";
import {useEffect, useState} from "react";

function LeftMenu({mobile, close}) {
    const [path, setPath] = useState('');
    const location = useLocation();

    useEffect(() => {
        setPath(location.pathname)
    }, [location]);

    return(
        <div className="left-menu">
            {
                mobile &&
                <button className="left-menu__close-btn" onClick={() => close()}>X</button>
            }
            <div className="left-menu__icon-box">
                <a href="/">
                    <Logo />
                </a>
            </div>
            <div className="left-menu__link-list">
                <Link to="/adm" className={`left-menu__link ${path === '/adm' ? 'active-link' : ''}`}>
                    <Icons name="home" width="1.5rem" height="1.5rem"/>
                    Main
                </Link>
                <Link to="artists" className={`left-menu__link ${path === '/adm/artists' ? 'active-link' : ''}`}>
                    <Icons name="users" width="2rem" height="2rem"/>
                    Artists
                </Link>
                <Link to="events" className={`left-menu__link ${path === '/adm/events' ? 'active-link' : ''}`}>
                    <Icons name="event" width="2rem" height="2rem"/>
                    Events
                </Link>
                <Link to="news" className={`left-menu__link ${path === '/adm/news' ? 'active-link' : ''}`}>
                    <Icons name="earth" width="1.5rem" height="1.5rem"/>
                    News
                </Link>
                <Link to="tours" className={`left-menu__link ${path === '/adm/tours' ? 'active-link' : ''}`}>
                    <Icons name="location" width="1.5rem" height="1.5rem"/>
                    Tours
                </Link>
                <Link to="featured" className={`left-menu__link ${path === '/adm/featured' ? 'active-link' : ''}`}>
                    <Icons name="star" width="1.5rem" height="1.5rem"/>
                    Featured
                </Link>
                <Link to="tickets" className={`left-menu__link ${path === '/adm/tickets' ? 'active-link' : ''}`}>
                    <Icons name="tickets" width="1.5rem" height="1.5rem"/>
                    Tickets
                </Link>
            </div>
        </div>
    )
}
export default LeftMenu;