import {Outlet, useLocation} from "react-router-dom";

function AdmLogin() {
    const { pathname } = useLocation()

    if(pathname.startsWith('/adm')) {
        import("../assets/css/style.css")
        import("../assets/css/header.css")
    }

    return(
        <div className="adm-login-page">
            <Outlet/>
        </div>
    )
}
export default AdmLogin