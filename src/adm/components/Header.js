import Icons from "../../components/Icons";
import AdmAuth from "../../state/AdmAuth";
import LeftMenu from "./LeftMenu";
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

function Header() {
    const leftMenuItem = useRef(null)
    const location = useLocation().pathname

    useEffect(() => {
        onCloseBurgerMenu()
    }, [location]);

    function logoutAdmin() {
        const admAuth = new AdmAuth()
        admAuth.logout()
        window.location.href = '/adm/login'
    }

    function onOpenBurgerMenu() {
        leftMenuItem.current.classList.add('show')
    }

    function onCloseBurgerMenu() {
        leftMenuItem.current.classList.remove('show')
    }

    return(
        <div className="header-content">
            <button className="header-content__burger-btn" onClick={onOpenBurgerMenu}>
                <Icons name="burger" width="25px" height="25px"/>
            </button>
            <div className="header-content__left-menu" ref={leftMenuItem}>
                <LeftMenu mobile={true} close={onCloseBurgerMenu}/>
            </div>
            <div className="header-content__admin-info">
                <span>Admin</span>
                <span>User</span>
            </div>
            <div className="header-content__logout">
                <button className="header-content__logout-btn" onClick={logoutAdmin}>
                    <Icons name="logout" width="2rem" height="2rem"/>
                </button>
            </div>
        </div>
    )
}
export default Header;