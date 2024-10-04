import {Outlet, useLocation} from "react-router-dom";
import Header from "../components/Header";

function PageLayout() {
    const {pathname} = useLocation()

    if(pathname === '/') {
        import("../assets/styles/global.css");
        import("../assets/styles/header.css");
    }
    return (
        <>
            <Header/>
            <Outlet/>
        </>

    )
}
export default PageLayout