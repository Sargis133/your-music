import {Outlet, useLocation} from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import Header from "../components/Header";
import AdmAuth from "../../state/AdmAuth";

function AdmLayout() {
    const { pathname } = useLocation()
    const admAuth = new AdmAuth()

    if(pathname.startsWith('/adm')) {
        import("../assets/css/style.css")
        import("../assets/css/header.css")
    }

    if(!admAuth.adminIsLogged()) {
        window.location.href = '/adm/login'
    }

    return(
        <div className="main-layout">
            <div className="main-layout__left-menu">
                <LeftMenu />
            </div>
            <div className="main-layout__content">
                <Header />
                <div className="main-layout__page-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default AdmLayout;