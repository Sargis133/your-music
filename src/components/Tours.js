import {useEffect, useState} from "react";
import {Carousel} from "nuka-carousel";
import {Link} from "react-router-dom";
import Auth from "../state/Auth";
import Modal from "./Modal";

function Tours({showModal}) {
    const [tours, setTours] = useState([])

    // FETCH - Main Page Tours

    async function getToursData() { // main page tours fetch
        await fetch("/config/tours.json")
            .then(res => res.json())
            .then(data => {
                if(data) {
                    sliderItems(data.tours)
                }
            })
    }


    function sliderItems(dataTours) {
        const sliderItems = []
        let items = []

        dataTours.forEach(item => {
            items.push(item)
            if(items.length === 4) {
                sliderItems.push(items)
                items = []
            }
        })

        if(items.length > 0) {
            sliderItems.push(items)
        }

        setTours(sliderItems)
    }


    useEffect(() => {
        getToursData()
    }, [])

    function checkUserAuth(e) {
        e.preventDefault()

        const auth = new Auth()

        if(auth.userIsLogged()) {
            window.location.href = '/tickets'
        } else {
            showModal()
        }
    }

    return(
        <div className="tours-content">

            <div className="tours-content__image-col" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://i.pinimg.com/736x/fa/9c/56/fa9c56ac6c3120e109996dadcc1a81cd.jpg)'}}>
                <div className="tours-content__image-description">
                    <p className="tours-content__image-subtitle">its awesome</p>
                    <div className="tours-content__image-title">
                        <p>2024</p>
                        <p>World Tour</p>
                        <p>september</p>
                    </div>
                    <div className="tours-content__image-button">
                        <button className="ticket-button" onClick={checkUserAuth}>get your tickets</button>
                    </div>
                </div>
            </div>

            <div className="tours-content__date-col">
                <p className="tours-content__date-title">
                  Tour Dates
                </p>
                <div className="tours-content__date-rows">

                    {
                        tours?.length === 1 && tours[0].map(item => {
                            return(
                                <div className="tours-content__date-row" key={item.id}>
                                    <div className="date-row__text-content">
                                        <p className="date-row__title">{item.date}</p>
                                        <p className="date-row__tour-name">{item.tourName}</p>
                                        <p className="date-row__location">{item.location}</p>
                                    </div>

                                    <div className="date-row__button">
                                        <Link to="/tickets" className="ticket-button">get your tickets</Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {
                        tours?.length > 1 &&
                        <Carousel showArrows={true} className="tours-slider">

                            {tours.map((group, groupIndex) => (
                                <div key={groupIndex} className="tours-slider-item">
                                    {group.map(item => (
                                        <div className="tours-content__date-row" key={item.id}>
                                            <div className="date-row__text-content">
                                                <p className="date-row__title">{item.date}</p>
                                                <p className="date-row__tour-name">{item.tourName}</p>
                                                <p className="date-row__location">{item.location}</p>
                                            </div>

                                            <div className="date-row__button">
                                                <Link to="/tickets" className="ticket-button" onClick={checkUserAuth}>get your tickets</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </Carousel>
                    }

                </div>
            </div>
        </div>
    )
}

export default Tours;