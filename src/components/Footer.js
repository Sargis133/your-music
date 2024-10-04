import Logo from "./Logo";
import {Link} from "react-router-dom";
import Icons from "./Icons";
import("../assets/styles/footer.css")

function Footer() {
    return(
        <div className="footer-content">
            <div className="footer-content__logo">
                <Logo/>
            </div>
            <div className="footer-content__icons">
                <Link to="https://www.pinterest.com/" target="_blank" className="events-slider__social-link pinterest-link">
                    <Icons name="pinterest" width="16" height="16" class="pinterest-icon"/>
                </Link>
                <Link to="https://www.facebook.com/?locale=ru_RU" target="_blank" className="events-slider__social-link facebook-link">
                    <Icons name="facebook" width="22" height="22" class="facebook-icon"/>
                </Link>
                <Link to="https://x.com/?lang=ru" target="_blank" className="events-slider__social-link twitter-link">
                    <Icons name="twitter" width="16" height="16" class="twitter-icon"/>
                </Link>
                <Link to="https://dribbble.com/" target="_blank" className="events-slider__social-link dribbble-link">
                    <Icons name="dribbble" width="16" height="16" class="dribbble-icon"/>
                </Link>
                <Link to="https://www.behance.net/" target="_blank" className="events-slider__social-link behance-link">
                    <Icons name="behance" width="16" height="16" class="behance-icon"/>
                </Link>
            </div>
            <div className="footer-content__copyright-text">
                <p>Copyright © 2024 All rights reserved | This template is made with <span>Colorlib</span></p>
            </div>
        </div>
    )
}

export default Footer;