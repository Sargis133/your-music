import EventsSlider from "../components/EventsSlider";
import Icons from "../components/Icons";
import {Link} from "react-router-dom";
import arrowImage from "../assets/images/arrow_down.png";
import Tours from "../components/Tours";
import FeaturedAlbums from "../components/FeaturedAlbums";
import LatestNews from "../components/LatestNews";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import {useEffect, useRef, useState} from "react";
import Modal from "../components/Modal";

function Home() {
    const tourContent = useRef(null)
    const eventsSlider = useRef(null)
    const featuredAlbum = useRef(null)
    const latestNew = useRef(null)
    const [isShowModal, setIsShowModal] = useState(false)


    function onScrollToEvents() {
        const header = document.querySelector('.header-content')

        window.scrollTo({
            top: tourContent.current?.offsetTop - header.clientHeight,
            left: 0,
            behavior:"smooth"
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', function() {
            let scrollPos = window.scrollY + window.innerHeight / 2
            if(scrollPos >= tourContent.current?.offsetTop) {
                tourContent.current.classList.add('show')
            }
            if(scrollPos >= featuredAlbum.current?.offsetTop) {
                featuredAlbum.current.classList.add('show')
            }
            if(scrollPos >= latestNew.current?.offsetTop) {
                latestNew.current.classList.add('show')
            }
        })
    }, []);

    useEffect(() => {
        eventsSlider.current?.classList.add('show')
    }, []);

    function isShowModalContent() {
        setIsShowModal(true)
        setTimeout(() => setIsShowModal(false), 3000)
    }

    return(
        <div className="page-content">
            <Modal isShow={isShowModal} modalData={{type: 'error', title: 'Oops', text: 'Please login to buy tickets'}}/>

            <div className="home-page__events-slider" ref={eventsSlider}>
                <EventsSlider showModal={isShowModalContent}/>
                <div className="events-slider__social">
                    <p className="events-slider__social-text">follow</p>
                    <div className="line"></div>
                    <div className="events-slider__social-icons">
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
                </div>
                <div className="events-slider__scroll-down" onClick={onScrollToEvents}>
                    <p>scroll down</p>
                    <div className="scroll-down__arrows">
                        <img src={arrowImage} alt=""/>
                        <img src={arrowImage} alt=""/>
                    </div>
                </div>
            </div>

            <div className="home-page__tours wrapper" ref={tourContent}>
                <Tours showModal={isShowModalContent}/>
            </div>

            <div className="home-page__featured wrapper" ref={featuredAlbum}>
                <FeaturedAlbums/>
            </div>

            <div className="home-page__latest-news" ref={latestNew}>
                <LatestNews/>
            </div>

            <div className="home-page__subscribe">
                <Subscribe/>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;