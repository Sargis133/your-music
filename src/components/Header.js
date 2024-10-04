import {Link, useLocation} from "react-router-dom";
import Logo from "./Logo";
import {useEffect, useRef} from "react";
import Auth from "../state/Auth";
import Icons from "./Icons";

function Header() {
    const location = useLocation().pathname
    const header = useRef(null)
    const burgerMenu = useRef(null)
    const auth = new Auth()
    const userLogged = auth.userIsLogged()

    function logoutUser() {
        auth.logoutUser()
    }

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if(window.scrollY > 34) {
                header.current?.classList.add('header-scrolled')
            } else {
                header.current?.classList.remove('header-scrolled')
            }
        })
        header.current.classList.add('show')
    }, []);


    function onShowBurgerMenu() {
        burgerMenu.current.classList.add('active')
    }

    function onHideBurgerMenu() {
        burgerMenu.current.classList.remove('active')
    }

    return(
        <div className="header" ref={header}>
            <div className="wrapper header-content">
                <div className="header-content__icon">
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
                <nav className="header-content__navbar">
                    <Link to="/"
                          className={`header-content__link ${location === '/' ? 'header-content__link-active' : ''}`}
                    >Home</Link>
                    <Link to="artists"
                          className={`header-content__link ${location === '/artists' ? 'header-content__link-active' : ''}`}
                    >Artists</Link>
                    <Link to="news"
                          className={`header-content__link ${location === '/news' ? 'header-content__link-active' : ''}`}
                    >News</Link>
                    <Link to="contact"
                          className={`header-content__link ${location === '/contact' ? 'header-content__link-active' : ''}`}
                    >Contact</Link>
                </nav>
                <div className="header-content__auth">
                    {userLogged ? (
                        <>
                            <Link to="login" className="header-content__link" onClick={logoutUser}>Logout</Link>
                        </>
                    ) : (
                        <>
                            <Link to="login"
                                  className={`header-content__link ${location === '/login' ? 'header-content__link-active' : ''}`}
                            >Login</Link>
                            <span> / </span>
                            <Link to="register"
                                  className={`header-content__link ${location === '/register' ? 'header-content__link-active' : ''}`}
                            >Register</Link>
                        </>
                    )
                    }

                </div>

                <div className="header-content__burger-btn">
                    <button onClick={onShowBurgerMenu}>
                        <Icons name="burger" width="25" height="25"/>
                    </button>
                </div>

                <div ref={burgerMenu} className="header-content__burger-menu">
                    <div className="burger-menu__close-btn">
                        <button onClick={onHideBurgerMenu}>
                            <Icons name="close" width="25" height="25"/>
                        </button>
                    </div>
                    <div className="burger-menu__icon">
                        <Logo/>
                    </div>
                    <div className="burger-menu__item-list">
                        <a href="/">Home</a>
                        <a href="/artists">Artists</a>
                        <a href="/news">News</a>
                        <a href="/contact">Contacts</a>
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;