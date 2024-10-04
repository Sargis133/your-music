import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tickets from "./pages/Tickets";
import Artist from "./pages/Artist";
import AdmHome from "./adm/pages/Home";
import PageLayout from "./layouts/PageLayout";
import AdmLayout from "./adm/layouts/AdmLayout";
import AdmArtists from "./adm/pages/Artists";
import AdmEvents from "./adm/pages/Events";
import AdmNews from "./adm/pages/News";
import AdmTours from "./adm/pages/Tours";
import AdmFeatured from "./adm/pages/Featured";
import AdmTickets from "./adm/pages/Tickets";
import AdmLoginLayout from "./adm/layouts/AdmLogin";
import AdmLogin from "./adm/pages/Login"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="artists" element={<Artists />}/>
                    <Route path="news" element={<News />}/>
                    <Route path="contact" element={<Contact />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="register" element={<Register />}/>
                    <Route path="tickets" element={<Tickets />}/>
                    <Route path="artist" element={<Artist />}/>
                </Route>


                <Route path="/adm" element={<AdmLayout />}>
                    <Route index element={<AdmHome />}/>
                    <Route path="artists" element={<AdmArtists />}/>
                    <Route path="events" element={<AdmEvents />}/>
                    <Route path="news" element={<AdmNews />}/>
                    <Route path="tours" element={<AdmTours />}/>
                    <Route path="featured" element={<AdmFeatured />}/>
                    <Route path="tickets" element={<AdmTickets />}/>
                </Route>

                <Route path="/adm/login" element={<AdmLoginLayout />}>
                    <Route index element={<AdmLogin />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default AppRoutes;